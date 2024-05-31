let button = document.querySelector("button");
let input = document.querySelector(".input-in");
let tasks = document.querySelector(".ul");

let div = document.getElementById("div");


button.addEventListener("click", function(){
    let taskText = input.value;
    let newTask = document.createElement("li");
    newTask.textContent = taskText;
tasks.append(newTask);
input.value = '';

})
