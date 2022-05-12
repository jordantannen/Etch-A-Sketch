function createGrid(size){
    // Creates columns 
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        document.getElementById("canvas").appendChild(row);

        // Creates rows
        for (let j = 0; j < size; j++) {
            let x = document.createElement("div");
            x.classList.add("unit");

            x.addEventListener("mouseenter", () => x.classList.add("color"));

            row.appendChild(x);
        }
    }
}

createGrid(16);

// let x = document.createElement("div");
// x.classList.add("unit");
// x.addEventListener("mouseenter", () => {
//     x.classList.add("color");
// });


// document.getElementById("container").appendChild(x);
