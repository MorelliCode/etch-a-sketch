let valueSelector = document.querySelector("#valueSelect");
let valueText = document.querySelector("#gridValue");
let gridHeight = document.querySelector(".grid").offsetHeight;

let boxSize = gridHeight / valueSelector.value;

console.log (valueSelector);
console.log (valueText);
console.log (boxSize);

valueSelector.oninput = function (){
    valueText.textContent = `${valueSelector.value}x${valueSelector.value}`;
}






function createBoxes (boxQuantity){
    const box = document.createElement("div");
    box.style.height = box.style.width = `${boxSize}px`;
    box.classList.add("box");
}
