var ctr = 1;
function addTodo(){

    let inputEl = document.querySelector("input");
    let value = inputEl.value;

    let newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    newDivEl.setAttribute("class", "addedTask");
    newDivEl.innerHTML= `<div>${value}</div><button id="delete" onclick="deleteElement(${ctr})">Delete</button>`
    ctr = ctr + 1;
    document.querySelector("main").appendChild(newDivEl);
}

function deleteElement(index){
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}