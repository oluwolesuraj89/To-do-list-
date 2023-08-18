const inputeContainer = document.getElementById('myInput');
const listItems = document.getElementById('listContainer');

function Add() {
    if (inputeContainer.value === ''){
        alert ('Your input is empty')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputeContainer.value;
        listItems.append(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputeContainer.value = "";
    saveData();
}
listItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('confirmed');
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
}, false);

function saveData() {
    localStorage.setItem('Data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('Data');
}
showTask();
