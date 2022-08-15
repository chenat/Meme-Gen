var gElCanvas;
var gCtx;
var gCurrShape = 'text';
var gColor = 'black';
var gFillColor = 'black';
var gShapeSize = 35;
var gTxtDown = 'default';
var gTxtUp = 'default';
var gTxtHeight = { x: 180, y: 100 };
var gCurrImg;
var gFont = 'david';
var gFirstSubmitUp = true;
var gFirstSubmitDown = true;
var gMoveLineUp = 0;
var gMoveLineDown = 0;
var gUploadImg = false

function init() {
    renderMeme();
    // addListeners();
    console.log('who is this')
    console.log('ctx', gCtx);
}

function initCanvas() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
}

function onEnterTextUp(txt) {
    gTxtDown = txt.value;
    clearCanvas()
    drawImg2()
}

function onEnterTextDown(txt) {
    gTxtUp = txt.value;
    clearCanvas()
    drawImg2()
}

function drawTextUp() {
    // if(gFirstSubmitUp === false){
    //     gFirstSubmitUp = true;
    //     drawImg2();
    //     clearCanvas();
    //     console.log('helo')
    //     if(gTxtDown !== 'default'){
    //         drawTextDown()
    //     }
    //     setTimeout(drawTextUp(),1)
    // }
    gCtx.beginPath();
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = gShapeSize + 'px ' + gFont;
    gCtx.fillStyle = gFillColor;
    var textWidth = gCtx.measureText(gTxtUp).width;
    if(textWidth > 440){
        return
    }
    gCtx.lineWidth = 1;
    gCtx.fillText(gTxtUp, (gElCanvas.width / 2), 100 + gMoveLineUp, 450);
    gCtx.strokeStyle = gColor;
    gCtx.strokeText(gTxtUp, (gElCanvas.width / 2), 100 + gMoveLineUp, 450);
    gCtx.closePath()
    gFirstSubmitUp = false
}

function onChangeKey() {
    clearCanvas();
    drawImg2();
}

function drawTextDown() {
    gCtx.beginPath();
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = gShapeSize + 'px ' + gFont;
    gCtx.fillStyle = gFillColor;
    var textWidth = gCtx.measureText(gTxtDown).width;
    if(textWidth > 440){
        return
    }
    gCtx.lineWidth = 1;
    gCtx.fillText(gTxtDown, (gElCanvas.width / 2), 400 + gMoveLineDown, 450);
    gCtx.strokeStyle = gColor;
    gCtx.strokeText(gTxtDown, (gElCanvas.width / 2), 400 + gMoveLineDown, 450);
    gCtx.closePath()
    gFirstSubmitDown = false
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    const a = document.createElement('a')
    a.href = data;
    a.download = data.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function onChangeColor() {
    let elColor = document.getElementById('color').value
    gColor = `${elColor}`
}

function onChangeFillColor() {
    let elColor = document.getElementById('fill-color').value
    gFillColor = `${elColor}`
}

function growShapeSize() {
    if (gShapeSize === 75) {
        return
    }
    gShapeSize += 5;
    drawImg2()
}

function shrinkShapeSize() {
    if (gShapeSize === 10) {
        return
    }
    gShapeSize -= 5;
    drawImg2()
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
            drawChar('a', offsetX, offsetY);
            break;
        case 'b':
            drawChar('b', offsetX, offsetY);
            break;
        case 'c':
            drawChar('c', offsetX, offsetY);
            break;
        case 'd':
            drawChar('d', offsetX, offsetY);
            break;
        case 'e':
            drawChar('e', offsetX, offsetY);
            break;
        case 'f':
            drawChar('f', offsetX, offsetY);
            break;
        case 'g':
            drawChar('g', offsetX, offsetY);
            break;
        case 'h':
            drawChar('h', offsetX, offsetY);
            break;
        case 'i':
            drawChar('i', offsetX, offsetY);
            break;
        case 'j':
            drawChar('j', offsetX, offsetY);
            break;
        case 'k':
            drawChar('k', offsetX, offsetY);
            break;
        case 'l':
            drawChar('l', offsetX, offsetY);
            break;
        case 'm':
            drawChar('m', offsetX, offsetY);
            break;
    }
}

function drawImg1() {
    var img = new Image();
    img.src = `img/meme-imgs-sq/${gCurrImg}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width,  gElCanvas.height,);
        drawTextUp()
        drawTextDown()
    };
}

function drawImg2() {
    var img = new Image();
    img.src = `img/meme-imgs-sq/${gCurrImg}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width,  gElCanvas.height,);
        drawTextUp()
        drawTextDown()
    };
}

function updateId(value) {
    console.log(value)
    gCurrImg = value;
    // renderModal(value);
    initCanvas();
    drawImg2();
}

function onChangeFont(value,className) {
    gFont = value;
    toggleSelectFont(value,className)
    drawImg2()
}

function toggleSelectFont(value,className){
    document.querySelector(`.${className}`).style.fontFamily =`${value} , sans sans-serif`
}

function getMeme() {

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

/* */

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function onDown(ev) {
    const pos = getEvPos(ev)
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
    return pos
}

function moveTextUpUpper() {
    gMoveLineUp -= 5
    drawImg2()
}

function moveTextUpLower() {
    gMoveLineDown -= 5
    drawImg2()
}

function moveTextDownUpper() {
    gMoveLineUp += 5
    drawImg2()
}

function moveTextDownLower() {
    gMoveLineDown += 5
    drawImg2()
}

function changeFont(name) {
    gCurrShape = name
    gFont = 'emoji'
    toggleSelectFont(value,className)
}

function drawChar(txt, x, y) {

    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = gShapeSize + 'px ' + gFont;
    gCtx.fillStyle = gFillColor;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = gColor;
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}



//

function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="buttons" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
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
    resizeCanvas();
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
    gCtx.drawImage(img, 0, 0, 500, 500);
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}