const gridContainer = document.querySelector("#grid-container");
gridContainer.classList.add("grid-container")
let numOfTimes = 16;
for(let j = 0;j<numOfTimes;j++){
    const row= document.createElement("div");
    for(let i = 0;i<numOfTimes;i++){
        const singleCell= document.createElement("div");
        singleCell.textContent = "0";
        singleCell.style.color = "red";
        singleCell.classList.add("grid-item");
        singleCell.addEventListener('mouseover', () => {
            singleCell.classList.add("bg-red");
        });
        row.appendChild(singleCell);
    }
    gridContainer.appendChild(row);
}
