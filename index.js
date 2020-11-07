const task = document.querySelector("input[type=text]");
const button  = document.querySelector("input[type=button]");
const tasksList = document.querySelector(".tasks-list")

let counter = 0;

function addTask () {
    counter++;

    if (!task.value) return;

    const listItem = document.createElement("li");
    const text = document.createTextNode(task.value);
    const label = document.createElement("LABEL");
    const checkbox = document.createElement("INPUT");
    listItem.classList.add("task");

    label.setAttribute("for", `task_${counter}`)
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", `task_${counter}`);

    label.appendChild(text);
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    tasksList.appendChild(listItem);

    task.value = "";
}

button.addEventListener("click", addTask);