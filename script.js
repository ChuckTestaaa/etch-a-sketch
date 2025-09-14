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
        event.target.style.backgroundColor = getRandomRgbColor();
    }

});

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); // Random red value (0-255)
    const g = Math.floor(Math.random() * 256); // Random green value (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
    return `rgb(${r}, ${g}, ${b})`;
}



let reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

function resetGrid() {
    let newSize = prompt("Enter grid size");
    container.replaceChildren();
    gridSize(newSize);

}


