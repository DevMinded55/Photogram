

let pics = ["0","1","2","3","4","5","6","7","8","9","10","11"]


function render(i){
    let picBox = document.getElementById("pics");
    for (let i = 0; i < pics.length; i++){
        picBox.innerHTML += getIMG(i);
    }
}

function getIMG(index){

    return `
        <img onclick="render_overlay()" id="${index}" src="./img/${index}.jpg" alt="">`
    }


function render_overlay(){
    clearOverlay();
    toggleOverlay();
    let overlayBox = document.getElementById("overlay_section");
    overlayBox.innerHTML += showOverlay();
}

function showOverlay(){
    
    return `
            <img onclick="toggleOverlay()" class="close_overlay" src="./img/x.png" alt="">
            <div>
            <img class="arrows" src="./img/arrow-left.png" alt="">
            <img id="overlay_pic" src="./img/1.jpg" alt="">
            <img class="arrows" src="./img/arrow-right.png" alt="">
        </div>`
}

function toggleOverlay(){
    document.getElementById("overlay_section").classList.toggle('d-none');
}

function clearOverlay(){
    overlayEmpty = document.getElementById("overlay_section").innerHTML = "";
}
