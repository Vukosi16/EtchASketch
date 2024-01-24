const container = document.querySelector('.container');

for (i = 1; i <= 16; i++) {
    const square = document.createElement('div');
    square.textContent = '#';
    square.setAttribute('class', 'squares');
    container.appendChild(square);

    square.onmouseover = function() {square.style.backgroundColor = "red"; };
    square.onmouseout = () => square.style.backgroundColor = "";
}

