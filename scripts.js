let slider = document.getElementById("myRange");
let sizeDisplay = document.getElementById("size");
let colorChoice = document.getElementById("color-val");

sizeDisplay.innerHTML = "Grid Size: " + slider.value + "x" + slider.value;
createGrid(slider.value);

slider.oninput = () => {
    createGrid(slider.value);
    sizeDisplay.innerHTML = "Grid Size: " + slider.value + "x" + slider.value;
};

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    removeGrid()
    createGrid(slider.value);
});

function createGrid(size){
    removeGrid();
    // Creates new col
    for (let i = 0; i < size; i++) {
        let col = document.createElement("div");
        col.classList.add("col");
        document.getElementById("canvas").appendChild(col);

        // Creates fills col in
        for (let j = 0; j < size; j++) {
            let x = document.createElement("div");
            x.classList.add("unit");
            x.style.height = 800 / size + "px";
            x.style.width = 800 / size + "px";

            // x.addEventListener("mouseenter", () => x.classList.add("color"));
            x.addEventListener("mouseenter", () => x.style.backgroundColor = colorChoice.value);
            
            col.appendChild(x);
        }
    }
}

function removeGrid(){
    let cols = document.getElementsByClassName("col");
    // cols.length is updated in real time, screwing with the for loop
    let totalCols = cols.length;

    for (let i = totalCols - 1; i >= 0; i--) {
        cols[i].remove();
    }
}