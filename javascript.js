const reset = document.querySelector('#reset');
const newSize = document.querySelector('#newSize');
const colorBlack = document.querySelector('#black');
const randomColor = document.querySelector('#randomColor');
const container = document.getElementById('container');
const mainTitle = document.querySelectorAll('span');
let gridSize = 16;
color = 'black'

mainTitle.forEach(span => {span.addEventListener('mouseenter', () => 
    span.style.color = `rgb(${random255()}, ${random255()}, ${random255()})`
)})

reset.addEventListener('click', () => {
    eraseGrid();
    createGrid(gridSize);
});

newSize.addEventListener('click', () =>{
    eraseGrid();
    gridSize = prompt('enter a number from 1-100 for grid size'), ('');
    if ((gridSize == null) || (gridSize == '')) {
        alert("Please enter a value");
        createGrid(gridSize);
        return;
    }
    else gridSize < 101 ? createGrid(gridSize): alert('enter number between 1-100 please.');
});

colorBlack.addEventListener('click', () => {;
    turnBlack();
})

randomColor.addEventListener('click', () => {
    randomColorFunc();
});

function eraseGrid(){
    if (container.firstChild === null) {
        return;
    }
    else {for (i = 0; i < gridSize; i++)
    container.removeChild(container.firstChild);
}}

function createGrid(gridSize){
    for (let i = 1; i <= gridSize; i++){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        container.appendChild(newRow);
    for (let x = 1; x <= gridSize; x++){
        let newCell = document.createElement('div');
        newCell.classList.add('grid');
        newRow.appendChild(newCell);
    }}
    (color == 'black') ? turnBlack() : randomColorFunc();
}


function turnBlack() {
    color = 'black';
    let newCell = container.querySelectorAll('.grid');
    newCell.forEach(grid => {grid.addEventListener("mouseenter", () => grid.style.backgroundColor = 'rgb(0,0,0)')})
    };

    function randomColorFunc() {
    color = 'random';
    let newCell = container.querySelectorAll('.grid');
    newCell.forEach(grid => {grid.addEventListener("mouseenter", () => grid.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})` )
    })};

    function random255(){
        return Math.floor(Math.random() *255);
    }
    

    createGrid(gridSize);
