

let pics = ["0","1","2","3","4","5","6","7","8","9","10","11"];
let actualIndex = 0;

function render(i){
    let picBox = document.getElementById("pics");
    for (let i = 0; i < pics.length; i++){
        picBox.innerHTML += getIMG(i);
    }
}

function getIMG(index){

    return `
        <img onclick="render_overlay(${index})" class="pictures" id="${index}" src="./img/${index}.jpg" alt="">`
    }


function render_overlay(index){
    actualIndex = index
    clearOverlay();
    toggleOverlay();
    let overlayBox = document.getElementById("overlay_section");
    overlayBox.innerHTML += showOverlay(actualIndex);
}

function showOverlay(index){
    
    return `
            <img onclick="toggleOverlay()" class="close_overlay" src="./img/x.png" alt="">
            <div>
            <img onclick="prevPic()" class="arrows" src="./img/arrow-left.png" alt="">
            <img id="overlay_pic" src="./img/${index}.jpg" alt="">
            <img onclick="nextPic()" class="arrows" src="./img/arrow-right.png" alt="">
        </div>`
}

function toggleOverlay(){
    document.getElementById("overlay_section").classList.toggle('d-none');
}

function clearOverlay(){
    overlayEmpty = document.getElementById("overlay_section").innerHTML = "";
}

function nextPic(){
    if (actualIndex < pics.length){
        actualIndex++;
        FirstLastPic()
        updateOverlay(actualIndex);
    }
}
function prevPic(){
    if (actualIndex < pics.length){
        actualIndex--;
        FirstLastPic()
        updateOverlay(actualIndex);
    }
}

function FirstLastPic(){
    if (actualIndex = pics.length){
        actualIndex = 0;
    }else if(actualIndex < pics.length){
        actualIndex = pics.length-1;
    }
}

function updateOverlay(){
    document.getElementById("overlay_pic").src = `./img/${actualIndex}.jpg`;
}