const valueSelector = document.querySelector("#valueSelect");
const resetButton = document.querySelector("button");
const valueText = document.querySelector("#gridValue");
const gridHeight = document.querySelector(".grid").clientHeight;
const gridSelect = document.querySelector(".grid");

let gridValue = 8;

const boxes = document.querySelectorAll(".box");

//let boxSize = (gridHeight / gridValue);

console.log (valueSelector);
console.log (valueText);
console.log (gridHeight);
console.log (gridValue);
//console.log (boxSize);

valueSelector.oninput = function (){
    gridValue = valueSelector.value;
    valueText.textContent = `${valueSelector.value}x${valueSelector.value}`;
    removeBoxes(gridSelect);
    createBoxes(gridValue);
};


resetButton.addEventListener('click', function(e){
    boxes.forEach(box => {
        box.classList.remove('active');
    });
});


function createDiv (size){
    let boxSize = (gridHeight / gridValue).toFixed(2);
    const box = document.createElement("div");
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    box.classList.add("box");
    box.addEventListener('mouseover', function (event) {
        box.classList.add('active');
    });
    gridSelect.appendChild(box);
};

function createBoxes (boxQuantity){
    for (let i = 0; i < (boxQuantity*boxQuantity) ; i++){
        createDiv(boxQuantity);
    }
};

function removeBoxes (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

boxes.forEach( box => {
    box.addEventListener('mouseover', function (event) {
        box.classList.add('active');
    });
});