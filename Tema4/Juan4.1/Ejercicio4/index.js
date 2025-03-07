const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filterSelect');

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(tasks);
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value;
    const priority = prioritySelect.value;

    const newTask = { text: taskText, priority, completed: false };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks(tasks);

    taskForm.reset();
}

function toggleTaskCompletion(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks(tasks);
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks(tasks);
}

function filterTasks() {
    const filter = filterSelect.value;
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (filter === 'pendientes') {
        renderTasks(tasks.filter(task => !task.completed));
    } else if (filter === 'completadas') {
        renderTasks(tasks.filter(task => task.completed));
    } else {
        renderTasks(tasks);
    }
}

function renderTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const taskText = document.createElement('span');
        taskText.textContent = `${task.text} (${task.priority})`;
        taskText.style.cursor = 'pointer';
        taskText.onclick = () => toggleTaskCompletion(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

taskForm.addEventListener('submit', addTask);
filterSelect.addEventListener('change', filterTasks);

loadTasks();
