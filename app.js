const mainBox = document.querySelector("#mainBox");
const buttonClear = document.querySelector('button[value="clear"]');
const spansRainbow = document.querySelectorAll("span");
//Create mini blocks for drawing
for (let i = 0; i < 40 ** 2; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = `${mainBox.offsetWidth / 40}px`;
    gridDiv.style.height = gridDiv.style.width;
    mainBox.appendChild(gridDiv);
}

let gridBlocks = document.querySelectorAll("#mainBox div");
//Return random color
function randomRGB() {
    const firstColor = Math.floor(Math.random() * 255);
    const secondColor = Math.floor(Math.random() * 255);
    const thirdColor = Math.floor(Math.random() * 255);
    const opacity = Math.random();
    return `rgb(${firstColor}, ${secondColor}, ${thirdColor}, ${opacity})`;
}
//Change background of blocks with random color and clear all with Clear button
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseover", () => {
        gridBlock.style.backgroundColor = randomRGB();
    });

    buttonClear.addEventListener("click", () => {
        gridBlock.style.backgroundColor = "white";
    });
});

const buttons = document.querySelectorAll("button");

setInterval(() => {
    buttons.forEach((button) => {
        button.style.background = randomRGB();
    });

    spansRainbow.forEach((span) => {
        span.style.background = randomRGB();
    });
}, 500);

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
        }
    }

    if (newGrid > 100) {
        return false;
    }

    if (newGrid <= 100 && newGrid != 0) {
        mainBox.replaceChildren();
    }

    for (let i = 0; i < newGrid ** 2; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.style.width = `${mainBox.offsetWidth / newGrid}px`;
        gridDiv.style.height = gridDiv.style.width;
        mainBox.appendChild(gridDiv);
    }

    let gridBlocks = document.querySelectorAll("#mainBox div");
    gridBlocks.forEach((gridBlock) => {
        gridBlock.addEventListener("mouseover", () => {
            gridBlock.style.backgroundColor = randomRGB();
        });

        buttonClear.addEventListener("click", () => {
            gridBlock.style.backgroundColor = "white";
        });
    });
});
