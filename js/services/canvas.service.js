var gElCanvas;
var gCtx;
var gCurrShape = 'text';
var gColor = 'black';
var gFillColor = 'black';
var gShapeSize = 35;
var gTxtDown = 'default';
var gTxtUp = 'default';
var gTxtHeight = {x:180,y:100};
var gCurrImg;
var gFont = 'david';
var gFirstSubmitUp = true;
var gFirstSubmitDown = true;
var gMoveLineUp = 0;
var gMoveLineDown = 0;

function init() {
    renderMeme();
    // addListeners();
    console.log('who is this')
    console.log('ctx', gCtx);
}

function initCanvas(){
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
}

function onEnterTextUp(txt){
    gTxtDown = txt.value;
    drawTextUp()
    // if(gTxt.length * gShapeSize > 200){
        
    // }
    
}

function onEnterTextDown(txt){
    gTxtUp = txt.value;
    drawTextDown()
    // if(gTxt.length * gShapeSize > 200){
        
    // }
    
}

function drawTextUp() {
    if(gFirstSubmitUp === false){
        // // window.history.back()
        // clearCanvas();
        // drawImg2();
        // gFirstSubmitUp = true;
        // return
    }

    gCtx.beginPath();
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'justify';
    gCtx.font = gShapeSize + 'px ' + gFont;
    gCtx.fillStyle = gFillColor;
    var textWidth = gCtx.measureText(gTxtUp).width;
    gCtx.lineWidth = 1;
    // gCtx.fillText(gTxt, gTxtHeight.x, gTxtHeight.y);
    gCtx.fillText(gTxtUp,(750/2) , 100 + gMoveLineUp,450);
    gCtx.strokeStyle = gColor;
    gCtx.strokeText(gTxtUp,(750/2) , 100 + gMoveLineUp,450);
    gCtx.closePath()
    gFirstSubmitUp = false
    // gCtx.textBaseline ='middle'
    // gCtx.textAlign  = 'center'
}

function onChangeKey(){
    clearCanvas();
    drawImg2();

}

function drawTextDown() {
    if(gFirstSubmitDown === false && gFirstSubmitUp === false){
        // // window.history.back()
        // clearCanvas();
        // drawImg2();
        // gFirstSubmitDown = true;
        // return
    }

    gCtx.beginPath();
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = gShapeSize + 'px ' + gFont;
    gCtx.fillStyle = gFillColor;
    var textWidth = gCtx.measureText(gTxtDown).width;
    gCtx.lineWidth = 1;
    // gCtx.fillText(gTxt, gTxtHeight.x, gTxtHeight.y);
    gCtx.fillText(gTxtDown,(750/2) , 650 + gMoveLineDown,450);
    gCtx.strokeStyle = gColor;
    gCtx.strokeText(gTxtDown,(750/2), 650 + gMoveLineDown,450);
    gCtx.closePath()
    gFirstSubmitDown = false
    // gCtx.textBaseline ='middle'
    // gCtx.textAlign  = 'center'
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    const a = document.createElement('a')
    a.href = data;
    // a.download = '#my-canvas';
    a.download = data.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function onChangeColor(){
    let elColor = document.getElementById('color').value
    gColor = `${elColor}`
}

function onChangeFillColor(){
    let elColor = document.getElementById('fill-color').value
    gFillColor = `${elColor}`
}

function growShapeSize(){
    if(gShapeSize === 75){
        return
    }
    gShapeSize += 5;
}

function shrinkShapeSize(){
    if(gShapeSize === 10){
        return
    }
    gShapeSize -= 5;
}

function setShape(shape) {
    gCurrShape = shape;
}

function draw(ev) {
    console.log(ev)

    const { offsetX, offsetY } = ev
    console.log(ev.offsetX, ev.offsetY)
    switch (gCurrShape) {
        case 'a':
            drawChar('a',offsetX,offsetY);
            break;
        case 'b':
            drawChar('b',offsetX,offsetY);
            break;
        case 'c':
            drawChar('c',offsetX,offsetY);
            break;
        case 'd':
            drawChar('d',offsetX,offsetY);
            break;               
        case 'e':
            drawChar('e',offsetX,offsetY);
            break;
        case 'f':
            drawChar('f',offsetX,offsetY);
            break;
        case 'g':
            drawChar('g',offsetX,offsetY);
            break;
        case 'h':
            drawChar('h',offsetX,offsetY);
            break;                  
    }

}

function drawImg2() {
    var img = new Image();
    img.src = `img/meme-imgs-sq/${gCurrImg}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, 750, 750);
    };
    // gCtx.save()
}

function updateId(value){
    console.log(value)
    gCurrImg = value;
    renderModal(value);
    initCanvas();
    drawImg2();
    
}

function onChangeFont(value){
    gFont = value;
}

function getMeme(){

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}


var gStartPos


/* */

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        // resizeCanvas()
        const center = { x: 600 / 2, y: 600 / 2 }
        createCircle(center)
        renderCanvas()
    })
}

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

function onDown(ev) {
    // Getting the clicked position
    const pos = getEvPos(ev)
    // { x: 15, y : 15 }
    if (!isCircleClicked(pos)) return
    setCircleDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onUp() {
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
    // if (gTouchEvs.includes(ev.type)) {
    //     ev.preventDefault()
    //     ev = ev.changedTouches[0]
    //     pos = {
    //         x: ev.pageX - ev.target.offsetLeft,
    //         y: ev.pageY - ev.target.offsetTop
    //     }
    // }
    return pos
}

function moveTextUpUpper(){
    gMoveLineUp -= 5
}

function moveTextUpLower(){
    gMoveLineDown -= 5
}

function moveTextDownUpper(){
    gMoveLineUp += 5
}

function moveTextDownLower(){
    gMoveLineDown += 5
}

function changeFont(name){
    gCurrShape = name
    gFont = 'emoji'
}

function drawChar(txt, x, y) {
    
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = gShapeSize + 'px '+ gFont ;
    gCtx.fillStyle = gFillColor;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = gColor;
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open'); 
    console.log('hello')   
}

function renderModalTwo() {
    const strHTML = `
        <div class="adjust-rating">
          <button>share on FB</button>
          <button >+</button>
        </div>
        <button class="action-btn" onclick="onCloseModal()">Close</button>
      `
  
    var elModal = document.querySelector('.modal')
    elModal.innerHTML = strHTML
    elModal.classList.add('shown')
}

function renderModalThree() {
    const strHTML = `
        <div class="memes">
          <button>share on FB</button>
          <button >+</button>
        </div>
        <button class="action-btn" onclick="onCloseModal()">Close</button>
      `
  
    var elModal = document.querySelector('.modal')
    elModal.innerHTML = strHTML
    elModal.classList.add('shown')
}

function onCloseModal(){
    document.querySelector('.modal').classList.remove('shown')
}

//

function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''

    var reader = new FileReader()

    reader.onload = (event) => {
        var img = new Image()
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, 750, 750);
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}