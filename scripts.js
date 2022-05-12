function createGrid(size){
    for (let i = 0; i < size; i++) {
        let x = document.createElement("div");
        x.classList.add("unit");
        x.addEventListener("mouseenter", () => {
        x.classList.add("color");
        });
        document.getElementById("canvas").appendChild(x);
    }
}

createGrid(16);

// let x = document.createElement("div");
// x.classList.add("unit");
// x.addEventListener("mouseenter", () => {
//     x.classList.add("color");
// });


// document.getElementById("container").appendChild(x);
