const task = document.querySelector("input[type=text]");
const button  = document.querySelector("input[type=button]");
const tasksList = document.querySelector(".tasks-list")

button.addEventListener("click", addTask);

function addTask () {
    console.log(task.value)

    const listItem = document.createElement("li");
    const text = document.createTextNode(task.value);
    listItem.appendChild(text);
    tasksList.appendChild(listItem);
    listItem.classList.add("task");
}