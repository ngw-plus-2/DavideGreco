// Array per memorizzare gli elementi della lista
var todoList = [];
// Funzione per aggiungere un nuovo elemento
function addTask(task) {
    if (task.trim() === "") {
        alert("Il task non può essere vuoto!");
        return;
    }
    var newTask = {
        id: Date.now(), // Utilizza un timestamp unico come ID
        task: task,
    };
    todoList.push(newTask);
    renderTasks();
}
// Funzione per rimuovere un elemento
function removeTask(taskId) {
    todoList = todoList.filter(function (item) { return item.id !== taskId; });
    renderTasks();
}
// Funzione per visualizzare gli elementi nel DOM
function renderTasks() {
    var taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = ""; // Pulisce la lista esistente
    todoList.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.task;
        // Pulsante per rimuovere il task
        var removeButton = document.createElement("button");
        removeButton.textContent = "Rimuovi";
        removeButton.addEventListener("click", function () { return removeTask(item.id); });
        listItem.appendChild(removeButton);
        taskListElement.appendChild(listItem);
    });
}
// Event listener per il pulsante "Aggiungi Task"
document.getElementById("addTaskButton").addEventListener("click", function () {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;
    addTask(task);
    taskInput.value = ""; // Svuota il campo di input
});
