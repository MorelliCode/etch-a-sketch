let valueSelector = document.querySelector("#valueSelect");
let valueText = document.querySelector("#gridValue");

console.log (valueSelector);
console.log (valueText);

valueSelector.oninput = function (){
    valueText.textContent = `${valueSelector.value}x${valueSelector.value}`;
}






function createBoxes (boxQuantity){
    for (i === boxQuantity; i > 0; i--){
        
    }
}