const reset = document.querySelector('#reset');
const newSize = document.querySelector('#newSize');
const randomColor = document.querySelector('#randomColor');
const container = document.getElementById('container')
let gridSize = 16;

reset.addEventListener('click', () => {
    eraseGrid();
});

newSize.addEventListener('click', () =>{
    eraseGrid();
    gridSize = prompt('enter a number from 1-100 for grid size');
    gridSize < 101 ? createGrid(gridSize): alert('enter number between 1-100 please.');
});
randomColor.addEventListener('click', () => {
    alert('randomColor clicked');
});

function eraseGrid(){
    if (container.firstChild == null) {
        return;
    }
    else {for (i = 0; i < gridSize; i++)
    container.removeChild(container.lastChild);
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
}
console.log(container.hasChildNodes())
console.log(container.firstChild)