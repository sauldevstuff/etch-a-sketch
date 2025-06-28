const container = document.getElementById("container");
const body = document.body;
const button = document.getElementById("button");

button.addEventListener("click", e => {
    console.log("hey");

})



for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    container.append(box)
    box.style.backgroundColor = "white";
    box.addEventListener("mouseover", e => {
        box.style.backgroundColor = "blue";
    })
}

