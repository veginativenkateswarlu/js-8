let taskList = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  taskList.push(taskText);
  input.value = '';
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const li = document.getElementById(`task-${index}`);
  const originalText = taskList[index];

  li.innerHTML = `
    <input type="text" id="editInput-${index}" value="${originalText}" />
    <button onclick="updateTask(${index})">Update</button>
    <button onclick="renderTasks()">Cancel</button>
  `;
}

function updateTask(index) {
  const input = document.getElementById(`editInput-${index}`);
  const updatedText = input.value.trim();

  if (updatedText === '') return;

  taskList[index] = updatedText;
  renderTasks();
}

function renderTasks() {
  const ul = document.getElementById('taskList');
  ul.innerHTML = '';

  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.id = `task-${index}`;
    li.innerHTML = `
      <span>${task}</span>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    ul.appendChild(li);
  });
}
