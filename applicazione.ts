// Definizione del tipo TodoItem
type TodoItem = {
    id: number;
    task: string;
  };
  
  // Array per memorizzare gli elementi della lista
  let todoList: TodoItem[] = [];
  
  // Funzione per aggiungere un nuovo elemento
  function addTask(task: string): void {
    if (task.trim() === "") {
      alert("Il task non può essere vuoto!");
      return;
    }
    const newTask: TodoItem = {
      id: Date.now(), // Utilizza un timestamp unico come ID
      task,
    };
    todoList.push(newTask);
    renderTasks();
  }
  
  // Funzione per rimuovere un elemento
  function removeTask(taskId: number): void {
    todoList = todoList.filter(item => item.id !== taskId);
    renderTasks();
  }
  
  // Funzione per visualizzare gli elementi nel DOM
  function renderTasks(): void {
    const taskListElement = document.getElementById("taskList") as HTMLUListElement;
    taskListElement.innerHTML = ""; // Pulisce la lista esistente
    todoList.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item.task;
  
      // Pulsante per rimuovere il task
      const removeButton = document.createElement("button");
      removeButton.textContent = "Rimuovi";
      removeButton.addEventListener("click", () => removeTask(item.id));
  
      listItem.appendChild(removeButton);
      taskListElement.appendChild(listItem);
    });
  }
  
  // Event listener per il pulsante "Aggiungi Task"
  document.getElementById("addTaskButton")!.addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const task = taskInput.value;
    addTask(task);
    taskInput.value = ""; // Svuota il campo di input
  });
  