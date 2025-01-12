let on = document.getElementById("onBtn");
let off = document.getElementById("offBtn");
let body = document.querySelector("body");
let codeInner = document.querySelector(".gen-code"); 

function randomColor() {

    let colorRange = "0123456789ABCDEF";

    let colorCode = "#";

    for (let index = 0; index < 6; index++) {

        colorCode += colorRange[Math.floor(Math.random() * 16)]
    }

    return colorCode;

}



let auto;

on.addEventListener("click", () => {

    auto = setInterval(() => {

        body.style.backgroundColor = randomColor();
        codeInner.innerHTML = randomColor();

    }, 1000);

})



off.addEventListener("click", () => {

    clearInterval(auto, codeInner);

})