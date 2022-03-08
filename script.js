const mainContainer = document.querySelector(".centerDiv");
let container = document.querySelector(".container");
const select = document.querySelector("select");
let grid = document.querySelector("select").value;
console.log(grid);
//creates horizontal divs inside container
function createDiv (){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style" , "border: 2px black solid; flex:1 1 0; display:flex; flex-direction:row;");
    for(let j=0;j<grid/2;j++){
        createDivRow(newDiv);
    }
    container.appendChild(newDiv);

}
//creates row of divs inside horizontal divs
function createDivRow(div){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style" , "border: 2px black solid; flex:1 1 0; background-color: white;");
    div.appendChild(newDiv);
}
//function for removing container div
function removeDiv(){
    const ldiv = document.querySelector(".centerDiv");
    ldiv.removeChild(ldiv.firstElementChild);
}
for(let i=0;i<grid/2;i++){
    createDiv(grid);
}
//creates new grid when selecting grid size
select.addEventListener('click', () =>{
    removeDiv();
    container = document.createElement("div");
    container.setAttribute("style", "width:800px;height: 800px;border: 2px black solid;display: flex;flex-direction: column;")
    mainContainer.appendChild(container);
    grid = document.querySelector("select").value;
    for(let i=0;i<grid/2;i++){
        createDiv();
    }
})