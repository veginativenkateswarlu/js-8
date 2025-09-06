let tasks = [];
let editIndex = -1;

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const modalTitle = document.getElementById("modalTitle");
const taskModal = new bootstrap.Modal(document.getElementById("taskModal"));

// Open modal to add new task
function openAddModal() {
  taskInput.value = "";
  editIndex = -1;
  modalTitle.textContent = "Add Task";
}

// Open modal to edit task
function openEditModal(index) {
  editIndex = index;
  taskInput.value = tasks[index];
  modalTitle.textContent = "Edit Task";
  taskModal.show();
}

// Add or update task
taskForm.onsubmit = function (e) {
  e.preventDefault();
  const value = taskInput.value.trim();
  if (value === "") return;

  if (editIndex === -1) {
    tasks.push(value);
  } else {
    tasks[editIndex] = value;
  }

  renderTasks();
  taskModal.hide();
};

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Render task list
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
      <span>${task}</span>
      <div>
        <button class="btn btn-sm btn-warning me-2" onclick="openEditModal(${index})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}
