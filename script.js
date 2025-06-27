const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Salvar e carregar tarefas no localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.querySelector('.task-text').textContent,
      completed: li.classList.contains('completed'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(({text, completed}) => {
    addTask(text, completed);
  });
}

function addTask(text, completed = false) {
  const li = document.createElement('li');
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  const btn = document.createElement('button');
  btn.className = 'delete-btn';
  btn.textContent = '✕';
  btn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(btn);
  taskList.appendChild(li);
  saveTasks();
}

taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  addTask(text);
  taskInput.value = '';
  taskInput.focus();
});

// Carregar tarefas salvas no início
loadTasks();
