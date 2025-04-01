

const pics = [
    "balloons1.jpg",
    "balloons2.jpg",
    "beachbridge.jpg",
    "cityoverview.jpg",
    "forrestView.jpg",
    "lake1.jpg",
    "lakeboat.jpg",
    "mountains.jpg",
    "mountains2.jpg",
    "sandrocks.jpg",
    "snowmountain.jpg",
    "waterfall.jpg"]

let actualIndex = 0;

function render(){
    let picBox = document.getElementById("pics");
    for (let i = 0; i < pics.length; i++){
        picBox.innerHTML += getImg(i);
    }
}

function getImg(index){

    return `
        <img onclick="renderOverlay(${index})" class="pictures" src="./img/${pics[index]}" alt="">`;
        console.log();
        
    }

function renderOverlay(index){
    actualIndex = index;
    clearOverlay();
    toggleOverlay();
    let overlayBox = document.getElementById("overlay_section");
    overlayBox.innerHTML += showOverlay(actualIndex);
}

function showOverlay(index){
    
    return `
            <div onclick="overlayProtection(event)" class="overlay_container">
                <img id="overlay_pic" src="./img/${pics[index]}" alt="">
                <div class="arrow_container">
                    <img onclick="prevPic()" class="arrows" src="./img/arrow-left.png" alt="">
                    <img onclick="nextPic()" class="arrows" src="./img/arrow-right.png" alt="">
                </div>
            </div>`;
}

function toggleOverlay(){
    document.getElementById("overlay_section").classList.toggle('d-none');
}

function clearOverlay(){
    document.getElementById("overlay_section").innerHTML = "";
}

function overlayProtection(event){
    event.stopPropagation();
}

function nextPic(){
    if (actualIndex < pics.length){
        actualIndex++;
        firstLastPic();
        updateOverlay(actualIndex);
    }
}
function prevPic(){
    if (actualIndex < pics.length){
        actualIndex--;
        firstLastPic();
        updateOverlay(actualIndex);
    }
}

function firstLastPic(){
    if (actualIndex >= pics.length){
        actualIndex = 0;
    }else if(actualIndex < 0){
        actualIndex = pics.length-1;
    }
}

function updateOverlay(){
    document.getElementById("overlay_pic").src = `./img/${pics[actualIndex]}`;
}