const taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const taskItem = document.createElement('li');
        const currentDate = new Date().toLocaleString();
        taskItem.innerHTML = `
            <span>${taskText} (${currentDate})</span>
            <span>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </span>
        `;
        pendingTasksList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.classList.add('completed');
    completedTasksList.appendChild(taskItem);
    button.parentNode.remove();
}

function deleteTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.remove();
}
