

let pics = ["0","1","2","3","4","5","6","7","8","9","10","11"]


function render(i){
    let picBox = document.getElementById("pics");
    for (let i = 0; i < pics.length; i++){
        picBox.innerHTML += getIMG(i);
    }
}

function getIMG(index){

    return `
        <img id="${index}" src="./img/${index}.jpg" alt="">`
    }
