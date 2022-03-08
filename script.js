const container = document.querySelector(".container");

const grid = 12;
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
    newDiv.setAttribute("style" , "border: 2px black solid; flex:1 1 0;");
    div.appendChild(newDiv);
}
for(let i=0;i<grid/2;i++){
    createDiv();
}