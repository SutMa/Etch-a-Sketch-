let container = document.getElementById('container');
let sketchContainer = document.getElementById('sketchContainer');
let inputButton = document.getElementById('inputButton');
let resetButton = document.getElementById('resetButton');

function reset(){
    makeGrid(16);
}

function makeGrid(input) {
    // Clear the container before creating the new grid
    sketchContainer.innerHTML = '';

    // Calculate the number of rows and columns
    const numRows = input;
    const numColumns = input;

    // Set the container's dimensions and style
    sketchContainer.style.display = 'grid';
    sketchContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
    sketchContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

    // Create the grid
    for (let i = 0; i < numRows * numColumns; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.border = '1px solid black';
        sketchContainer.appendChild(gridItem);
    }
}


function getUserInput(){
    let userIput = window.prompt('Please enter the size of the grid you want to display')
    userInput = parseInt(userIput);
    if(userInput>=100){
        reset();
        alert("Cannot go above 100");
    } else{
        makeGrid(userIput);
    }
}


makeGrid(16);

resetButton.addEventListener('click', reset);
inputButton.addEventListener('click', getUserInput);


function addClickHandlers(){

    let isDrawing = false;
    sketchContainer.addEventListener('mousedown', () =>{
        isDrawing = true;
    });
    document.addEventListener('mouseup', () =>{
        isDrawing = false;
    })
    sketchContainer.addEventListener('mouseover', function (event){
        if(isDrawing){
            if (event.target.classList.contains('grid-item')){
                event.target.style.backgroundColor = 'black';
            }
        }
        
    })

}

addClickHandlers();


