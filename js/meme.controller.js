var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
var gImgs = [{id: 1, url: 'img/meme-imgs-sq/1.jpg', keywords: ['funny', 'male']},{id: 2, url: 'img/meme-imgs-sq/2.jpg', keywords: ['cute', 'dog']}
,{id: 3, url: 'img/meme-imgs-sq/3.jpg', keywords: ['cute', 'dog','baby']},{id: 4, url: 'img/meme-imgs-sq/4.jpg', keywords: ['cute', 'cat']},{id: 5, url: 'img/meme-imgs-sq/5.jpg', keywords: ['baby', 'wholesome']},
{id: 6, url: 'img/meme-imgs-sq/6.jpg', keywords: ['alines', 'history']},{id: 7, url: 'img/meme-imgs-sq/7.jpg', keywords: ['baby', 'funny','cute']}, {id: 8,url: 'img/meme-imgs-sq/8.jpg', keywords: ['male', 'chocolate']},
{id: 9, url: 'img/meme-imgs-sq/9.jpg', keywords: ['baby', 'laugth','funny']},{id: 10, url: 'img/meme-imgs-sq/1.jpg', keywords: ['funny', 'male']},{id: 11, url: 'img/meme-imgs-sq/2.jpg', keywords: ['cute', 'dog']}
,{id: 12, url: 'img/meme-imgs-sq/3.jpg', keywords: ['cute', 'dog','baby']},{id: 13, url: 'img/meme-imgs-sq/4.jpg', keywords: ['cute', 'cat']},{id: 14, url: 'img/meme-imgs-sq/5.jpg', keywords: ['baby', 'wholesome']},
{id: 15, url: 'img/meme-imgs-sq/6.jpg', keywords: ['alines', 'history']},{id: 16, url: 'img/meme-imgs-sq/7.jpg', keywords: ['baby', 'funny','cute']}, {id: 17,url: 'img/meme-imgs-sq/8.jpg', keywords: ['male', 'chocolate']},
{id: 18, url: 'img/meme-imgs-sq/9.jpg', keywords: ['baby', 'laugth','funny']}];

function renderMeme(){
    var htmlStr = ''
    var elCanvas = document.querySelector(`.grid`)

    for(var i = 0; i < gImgs.length;i++){
        htmlStr += `<div class="square">
        <a href="#openModal">
        <img name="${gImgs[i].id}" class="meme-img" onclick="updateId(this.name)" src="img/meme-imgs-sq/${gImgs[i].id}.jpg" />

        <div id="openModal" class="modalDialog">

        </div>
        </a>      
    </div>
    
    `
    }

    elCanvas.innerHTML = htmlStr;
    console.log(elCanvas.innerHTML)
}

function renderModal(){
    var strHTML = `
    <div class="grid-editor">
        <div class="canvas-container">
            <canvas class="canvas" id="my-canvas" height="750" width="750" onclick="draw(event)"></canvas>
        </div>
        <div class="item1">
            <input 
                type="text" 
                class="text-input" 
                onchange="onChangeKey()"
                onkeyup="onEnterTextDown(this)"
                placeholder="Enter text here..."
                autofocus/> 
            <input 
                type="text" 
                class="text-input2" 
                onchange="onChangeKey()"
                onkeyup="onEnterTextUp(this)" 
                placeholder="Enter text here..."
                autofocus/> 
        </div>
        <div class="item2"><button class="buttons" onclick="drawTextUp()">submit Upper line</button>
            <button class="buttons" onclick="drawTextDown()">submit Lower line</button>
            <button class="buttons" onclick="onChangeKey()">Clear canvas</button>
            <input class="buttons select" oninput="onChangeColor()" type="color" id="color" name="color" form="frmRegister" value="#080808" />
            <input class="buttons select" oninput="onChangeFillColor()" type="color" id="fill-color" name="fill-color" form="frmRegister" value="#080808" />
            <button class="buttons" onclick="growShapeSize()">grow size</button>
            <button class="buttons" onclick="shrinkShapeSize()">shrink size</button>
            <button class="buttons" onclick="moveTextUpUpper()">move 1st line up</button>
            <button class="buttons" onclick="moveTextUpLower()">move 2nd line up</button>
            <button class="buttons" onclick="moveTextDownUpper()">move 1st line down</button>
            <button class="buttons" onclick="moveTextDownLower()">move 2nd line down</button>
            <button class="buttons emoji" name="a" onclick="changeFont(this.name)">a</button>
            <button class="buttons emoji" name="b" onclick="changeFont(this.name)">b</button>
            <button class="buttons emoji" name="c" onclick="changeFont(this.name)">c</button>
            <button class="buttons emoji" name="d" onclick="changeFont(this.name)">d</button>
            <button class="buttons emoji" name="e" onclick="changeFont(this.name)">e</button>
            <button class="buttons emoji" name="f" onclick="changeFont(this.name)">f</button>
            <button class="buttons emoji" name="g" onclick="changeFont(this.name)">g</button>
            <button class="buttons emoji" name="h" onclick="changeFont(this.name)">h</button><br></br>
            <form>
                <span class="check-box">please select a font</span><br>
                <input type="radio" name="option" class="option1" onclick="onChangeFont(this.className)"><span class="option-1">option 1</span><br>
                <input type="radio" name="option" class="option2" onclick="onChangeFont(this.className)"><span class="option-2">option 2</span><br>
                <input type="radio" name="option" class="option3" onclick="onChangeFont(this.className)"><span class="option-3">option 3</span><br>
                <input type="radio" name="option" class="option4" onclick="onChangeFont(this.className)"><span class="option-4">option 4</span><br>                <input type="radio" name="option" class="option5" onclick="onChangeFont(this.className)"><span class="option-5">option 5</span><br>
                <input type="radio" name="option" class="option6" onclick="onChangeFont(this.className)"><span class="option-6">option 6</span><br>
            </form>
            <button class="buttons download" href="#" onclick="downloadCanvas(this)" download="cool-canvas">Download</button>
            <button class="buttons" onClick="renderModalTwo()">Share</button>
            <div class="inputs">
                <input type="file" class="file-input btn" name="image" onchange="onImgInput(event)" />
                <button class="btn" onclick="uploadImg()">Upload Image from Canvas</button>
                <p class="user-msg"></p>
            <div class="share-container"></div>
</div>                        
        </div>

    </div>
    <a class="no-modal" href="#close" title="Close"><span class="exit">X</span></a>

`
var elModal = document.querySelector(`.modalDialog`)
elModal.innerHTML = strHTML
elModal.classList.add('shown')

}

