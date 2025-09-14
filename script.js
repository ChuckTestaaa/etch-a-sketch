let container = document.querySelector('.container');

gridSize(16);

function gridSize(size) {

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('box')
            newDiv.textContent = `BOX: ${j}`
            container.appendChild(newDiv);
        }

    }
}


container.style.backgroundColor = 'antiquewhite';

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('box')) {
        event.target.style.backgroundColor = 'gray';
    }

});

let reset = document.querySelector('#reset');


reset.addEventListener('click', resetGrid);

function resetGrid() {
    let newSize = prompt("Enter grid size");
    container.replaceChildren();
    gridSize(newSize);

}


