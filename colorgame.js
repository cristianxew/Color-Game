let numberSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetBoton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {

    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[2].classList.remove('selected');
            this.classList.add('selected');

            if (this.textContent === 'Easy') {
                numberSquares = 3;
            }
            else if (this.textContent === 'Hard') {
                numberSquares = 6;
            }
            else {
                numberSquares = 9;
            }
            reset();
        })
    }
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add click listener to squares
        squares[i].addEventListener('click', function () {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare color to pickedcolor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct';
                resetBoton.textContent = 'Play Again!';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
        })
    }
}


function reset() {
    colors = generateRandomColors(numberSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colodisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetBoton.textContent = 'New Colors';
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            //add initial colors to square
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }

    h1.style.background = 'steelblue';
    messageDisplay.textContent = '';
}

resetBoton.addEventListener('click', function () {
    reset();
})

function changeColors(color) {
    //loopo through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to macth given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    //return that array
    return arr;
}

function randomColors() {
    //pick a red from 0 to 255
    let red = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    let green = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
