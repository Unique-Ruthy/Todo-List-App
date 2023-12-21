let todoList = [];

function renderTodoList() {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";

  todoList.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="radio" name="task${index}" ${
      task.completed ? "checked" : ""
    } onclick="toggleComplete(${index})">
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    todoListContainer.appendChild(listItem);
  });
}

function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    todoList.push({ text: newTaskText, completed: false });
    newTaskInput.value = "";
    renderTodoList();
  }
}

function toggleComplete(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTodoList();
}

function editTask(index) {
  const newText = prompt("Edit task:", todoList[index].text);
  if (newText !== null) {
    todoList[index].text = newText.trim();
    renderTodoList();
  }
}

function deleteTask(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    todoList.splice(index, 1);
    renderTodoList();
  }
}

// Initial rendering
renderTodoList();
