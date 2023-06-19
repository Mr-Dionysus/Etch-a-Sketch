const mainBox = document.querySelector("#mainBox");

for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement("div");
    mainBox.appendChild(gridDiv);
}

const gridBlocks = document.querySelectorAll("#mainBox div");

gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseover", () => {
        gridBlock.style.backgroundColor = "black";
    });
});
