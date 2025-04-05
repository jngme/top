var grid_size = 100;
var grid_num = 4;

const btn = document.createElement("button")
btn.textContent = "click me to change grid dimensions";
btn.style.padding = "20px";
btn.style.marginBottom = "20px";
document.body.appendChild(btn)

// Create a container for the grid
const container = document.createElement("div");
//container.style.width = "960px";
//container.style.height = "960px";
container.style.display = "grid";
container.style.border = "1px solid black";
document.body.appendChild(container);


function createGrid (grid_num=4){
    container.innerHTML = "";
    container.style.gridTemplateRows = `repeat(${grid_num}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${grid_num}, 1fr)`;

    for (let i=0; i <grid_num *grid_num; i++){
        const div1 = document.createElement("div");
        div1.style.display = "flex";
        
        div1.style.flexDirection = "row";
        
        for (let j=0; j<grid_num; j++){
            const div2 = document.createElement("div");
            div2.style.border = "1px solid pink";
            div2.style.width = grid_size+"px"; 
            div2.style.height = grid_size+"px";
            
            div2.addEventListener("mouseenter", () => {
                div2.style.backgroundColor = "blue";
              });
          
            div2.addEventListener("mouseleave", () => {
                div2.style.backgroundColor = ""; // or reset to original color
            });
            
            
            div1.appendChild(div2);
        }
    
        container.appendChild(div1);
    }  
}

createGrid()

btn.addEventListener("click", () => {
    let gridNum = prompt("How many squares per side? (Max: 100)", 4);
    gridNum = parseInt(gridNum);

    if (isNaN(gridNum) || gridNum < 1 || gridNum > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
      }
      
      createGrid(gridNum);
  });
