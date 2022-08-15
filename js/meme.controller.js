var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/meme-imgs-sq/1.jpg', keywords: ['funny', 'male'] }, { id: 2, url: 'img/meme-imgs-sq/2.jpg', keywords: ['cute', 'dog'] }
    , { id: 3, url: 'img/meme-imgs-sq/3.jpg', keywords: ['cute', 'dog', 'baby'] }, { id: 4, url: 'img/meme-imgs-sq/4.jpg', keywords: ['cute', 'cat'] }, { id: 5, url: 'img/meme-imgs-sq/5.jpg', keywords: ['baby', 'wholesome'] },
{ id: 6, url: 'img/meme-imgs-sq/6.jpg', keywords: ['alines', 'history'] }, { id: 7, url: 'img/meme-imgs-sq/7.jpg', keywords: ['baby', 'funny', 'cute'] }, { id: 8, url: 'img/meme-imgs-sq/8.jpg', keywords: ['male', 'chocolate'] },
{ id: 9, url: 'img/meme-imgs-sq/9.jpg', keywords: ['baby', 'laugth', 'funny'] }, { id: 10, url: 'img/meme-imgs-sq/1.jpg', keywords: ['funny', 'male'] }, { id: 11, url: 'img/meme-imgs-sq/2.jpg', keywords: ['cute', 'dog'] }
    , { id: 12, url: 'img/meme-imgs-sq/3.jpg', keywords: ['cute', 'dog', 'baby'] }, { id: 13, url: 'img/meme-imgs-sq/4.jpg', keywords: ['cute', 'cat'] }, { id: 14, url: 'img/meme-imgs-sq/5.jpg', keywords: ['baby', 'wholesome'] },
{ id: 15, url: 'img/meme-imgs-sq/6.jpg', keywords: ['alines', 'history'] }, { id: 16, url: 'img/meme-imgs-sq/7.jpg', keywords: ['baby', 'funny', 'cute'] }, { id: 17, url: 'img/meme-imgs-sq/8.jpg', keywords: ['male', 'chocolate'] },
{ id: 18, url: 'img/meme-imgs-sq/9.jpg', keywords: ['baby', 'laugth', 'funny'] }];

function renderMeme() {
    var htmlStr = ''
    var elCanvas = document.querySelector(`.grid`)

    for (var i = 0; i < gImgs.length; i++) {
        htmlStr += `<div class="square">
        <a href="#openModal">
        <img name="${gImgs[i].id}" class="meme-img" onclick="openModal(this.name)" src="img/meme-imgs-sq/${gImgs[i].id}.jpg" />
        </a>      
    </div>
    
    `
    }

    elCanvas.innerHTML = htmlStr;
    console.log(elCanvas.innerHTML)
}

// function renderModal() {
//     var strHTML = ``
//     var elModal = document.querySelector(`.modalDialog`)
//     elModal.innerHTML = strHTML
//     elModal.classList.add('shown')
// }

function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}

function renderModalTwo() {
    const strHTML = `
        <div>
        <button class="buttons" onclick="uploadImg()">Upload image</button>

        <button class="buttons download" onclick="downloadCanvas(this)" download="cool-canvas">Download</button>
          <button class="buttons" >+</button>
        </div>
        <button class="buttons" onclick="onCloseModalTwo()">Close</button>
      `

    var elModal = document.querySelector('.modal')
    elModal.innerHTML = strHTML
    elModal.classList.add('shown')
}

function renderModalSavedMemes() {
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

function openModal(value){
    var elModal = document.querySelector('.modalDialog')
    elModal.classList.add('shown')
    updateId(value);
}

function onCloseModal(){
    document.querySelector('.modalDialog').classList.remove('shown')

}

function onCloseModalTwo() {
    document.querySelector('.modal').classList.remove('shown')
}

