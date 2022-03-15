const reset = document.querySelector('#reset');
const newSize = document.querySelector('#newSize');
const randomColor = document.querySelector('#randomColor');
const container = document.getElementById('container')

reset.addEventListener('click', () => {
    alert('reset clicked');
});
newSize.addEventListener('click', () =>{
    alert('newSize Clickereded');
});
randomColor.addEventListener('click', () => {
    alert('randomColor clicked');
});


function createGrid(){
    let gridSize = 5;
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
createGrid()