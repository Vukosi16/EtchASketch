const container = document.querySelector('.container');
const button = document.querySelector('.button');

button.addEventListener('click', function() {
    const userInput = prompt("Enter number of squares in a line you want: ");
    gridNumber = parseInt(userInput); 

    const gridSize = gridNumber * gridNumber;

    const sizeCalculate = 6.5 * gridNumber;

    container.style.width = `${sizeCalculate}px`;
    container.style.height = `${sizeCalculate}px`;

    const color = prompt("Enter your pen color. Red, Green or Blue. Cancel for black: ").toLowerCase();
    console.log(color)

    let pen;

    if (color == "red") {
        pen = "red";
    } else if (color == "green") {
        pen = "green"
    } else if (color == "blue") {
        pen = "blue"
    } else {
        pen = "black";
    }



    for (i = 1; i <= gridSize; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'squares');
        container.appendChild(square);

        square.onmouseover = function() {square.style.backgroundColor = `${pen}`; };
        buttonClear.addEventListener('click', () => square.style.backgroundColor = 'white');
    }

    
}, { once: true });
















