function createGrid(size){
    // Creates new col
    for (let i = 0; i < size; i++) {
        let col = document.createElement("div");
        col.classList.add("col");
        document.getElementById("canvas").appendChild(col);

        // Creates fills col in
        for (let j = 0; j < size; j++) {
            let x = document.createElement("div");
            x.classList.add("unit");

            x.addEventListener("mouseenter", () => x.classList.add("color"));

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

createGrid(16);

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => removeGrid());
