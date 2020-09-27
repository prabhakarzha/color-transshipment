let $btn = document.getElementById('btn-flip');
let temp = document.querySelector('.color-flip');

$btn.addEventListener('click',()=>{
    let red   = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue  = Math.floor(Math.random() * 255);

    temp.style.background = `rgb(${red},${green},${blue})`;
}

)