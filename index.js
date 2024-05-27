let button = document.querySelector("button");
let input = document.querySelector(".input-in");
let tasks = document.querySelector(".ul");
let newTask = document.getElementById("li");
let div = document.getElementById("div");


button.onclick = function(){
    let taskText = input.value;
    newTask.textContent = taskText;
tasks.append(newTask);
input.value = '';

}
