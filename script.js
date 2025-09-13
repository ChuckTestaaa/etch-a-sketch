let container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box')

        container.appendChild(newDiv);
    }

}
container.style.backgroundColor = 'antiquewhite';

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('box')) {
        event.target.style.backgroundColor = 'red';
    }

});


