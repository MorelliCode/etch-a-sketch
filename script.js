const valueSelector = document.querySelector("#valueSelect");
const valueText = document.querySelector("#gridValue");
const gridHeight = document.querySelector(".grid").offsetHeight;
const boxes = document.querySelectorAll(".box");

const boxSize = gridHeight / valueSelector.value;

console.log (valueSelector);
console.log (valueText);
console.log (boxSize);

valueSelector.oninput = function (){
    valueText.textContent = `${valueSelector.value}x${valueSelector.value}`;
};

boxes.forEach( box => {
    box.addEventListener('mouseover', function (event) {
        box.classList.add('active');
        box.style.backgroundColor = 'yellow';
        console.log(box);
    })
});


function createBoxes (boxQuantity){
    const box = document.createElement("div");
    box.style.height = box.style.width = `${boxSize}px`;
    box.classList.add("box");
};
