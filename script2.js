const valueSelector = document.querySelector("#valueSelect");
const valueText = document.querySelector("#gridValue");

const gridHeight = document.querySelector(".grid").clientHeight;
const gridSelect = document.querySelector(".grid");
let gridValue = valueSelector.value;

const resetButton = document.querySelector("button");


//make the value text reflect initial value
valueText.textContent = `${gridValue}x${gridValue}`;

//create initial set of boxes
createBoxes(gridValue);

//When value changes run functions
valueSelector.oninput = function (){
    //update grid value, and reflect change on text
    gridValue = valueSelector.value;
    valueText.textContent = `${gridValue}x${gridValue}`;
    
    //remove previous boxes
    removeBoxes(gridSelect);
    
    //create new boxes
    createBoxes(gridValue);
};



function createBoxes (boxQuantity){
    for (let i = 0; i < (boxQuantity*boxQuantity) ; i++){
        createDiv(boxQuantity);
    }
};

function createDiv (boxQuantity){
    let boxSize = (gridHeight / boxQuantity);
    const box = document.createElement("div");
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    box.classList.add("box");
    box.addEventListener('mouseover', function (event) {
        box.classList.add('active');
    });
    gridSelect.appendChild(box);
};

function removeBoxes (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

resetButton.addEventListener('click', function(e){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.classList.remove('active');
    });
});



