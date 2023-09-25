let container = document.getElementById('container');
let sketchContainer = document.getElementById('sketchContainer');
let inputButton = document.getElementById('inputButton');
let resetButton = document.getElementById('resetButton');

function reset(){
    gridSize = 16;
    makeGridSize(gridSize);
}

function clearGrid(){

}

function makeGrid(input){
    for (let i = 0; i < input; i++) {
        for(let j = 0; j < input; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.border = '1px solid black'
            sketchContainer.appendChild(gridItem);
            
        }
    }
}


let gridSize = 16;
makeGrid(gridSize);


document.addEventListener("DOMContentLoaded", function(){
    gridSize = 16;
    makeGrid(gridSize);
});