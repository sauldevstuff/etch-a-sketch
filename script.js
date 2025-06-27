const container = document.getElementById("container");
const body = document.body;


for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    container.append(box)
}