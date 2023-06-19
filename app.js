const mainBox = document.querySelector("#mainBox");

for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = `${(mainBox.offsetWidth - 4) / 16}px`;
    gridDiv.style.height = gridDiv.style.width;
    mainBox.appendChild(gridDiv);
}

let gridBlocks = document.querySelectorAll("#mainBox div");

function randomRGB() {
    const firstColor = Math.floor(Math.random() * 255);
    const secondColor = Math.floor(Math.random() * 255);
    const thirdColor = Math.floor(Math.random() * 255);
    return `rgb(${firstColor},${secondColor},${thirdColor})`;
}

gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseover", () => {
        gridBlock.style.backgroundColor = randomRGB();
    });
});

const createNewGrid = document.querySelector("button");

createNewGrid.addEventListener("click", () => {
    let newGrid = 101;

    if (newGrid <= 100 && newGrid === true) {
        mainBox.replaceChildren();
    } else {
        while (newGrid > 100) {
            newGrid = +prompt(
                "Write how many squares per side do you want but <= 100"
            );
            console.log(newGrid);
        }
    }

    if (newGrid > 100) {
        return false;
    }

    if (newGrid <= 100 && newGrid != 0) {
        console.log(newGrid);
        mainBox.replaceChildren();
    }

    for (let i = 0; i < newGrid ** 2; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.style.width = `${(mainBox.offsetWidth - 4) / newGrid}px`;
        gridDiv.style.height = gridDiv.style.width;
        mainBox.appendChild(gridDiv);
    }

    let gridBlocks = document.querySelectorAll("#mainBox div");
    gridBlocks.forEach((gridBlock) => {
        gridBlock.addEventListener("mouseover", () => {
            gridBlock.style.backgroundColor = randomRGB();
        });
    });
});
