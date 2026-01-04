// --- CONFIGURATION ---
const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 16;

// --- STATE ---
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

// --- DOM ELEMENTS ---
const canvas = document.getElementById('canvas');
const colorPicker = document.getElementById('color-val');
const colorDisplay = document.getElementById('color-display');
const clearBtn = document.getElementById('clear');
const sizeSlider = document.getElementById('size-slider');
const sizeDisplay = document.getElementById('size-display');
const mainContainer = document.getElementById('main-container');

// --- INITIALIZATION ---
setupGrid(DEFAULT_SIZE);
colorDisplay.style.backgroundColor = DEFAULT_COLOR;

// --- EVENT LISTENERS ---
canvas.addEventListener(
	'touchmove',
	function (e) {
		e.preventDefault();
	},
	{ passive: false }
);

// Color Inputs
colorPicker.oninput = (e) => {
	setCurrentColor(e.target.value);
	colorDisplay.style.backgroundColor = e.target.value;
};

// Clear / Reset
clearBtn.onclick = () => {
	mainContainer.classList.add('shake-active');

	setTimeout(() => {
		reloadGrid();
	}, 150);

	setTimeout(() => {
		mainContainer.classList.remove('shake-active');
	}, 400);
};

// Size Slider
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

// --- FUNCTIONS ---
function setCurrentColor(newColor) {
	currentColor = newColor;
}

function updateSizeValue(value) {
	sizeDisplay.innerHTML = `${value} × ${value}`;
}

function changeSize(value) {
	currentSize = value;
	updateSizeValue(value);
	reloadGrid();
}

function reloadGrid() {
	canvas.innerHTML = '';
	setupGrid(currentSize);
}

function setupGrid(size) {
	canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		const gridElement = document.createElement('div');
		gridElement.classList.add('pixel');

		gridElement.addEventListener('mouseover', changeColor);
		gridElement.addEventListener('mousedown', changeColor);

		canvas.appendChild(gridElement);
	}
	canvas.addEventListener('touchmove', handleTouchMove);
}

function changeColor(e) {
	e.target.style.backgroundColor = currentColor;
}

function handleTouchMove(e) {
	const touch = e.touches[0];
	const target = document.elementFromPoint(touch.clientX, touch.clientY);

	if (target && target.classList.contains('pixel')) {
		target.style.backgroundColor = currentColor;
	}
}
