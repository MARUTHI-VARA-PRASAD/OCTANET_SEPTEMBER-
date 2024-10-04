const taskInput = document.getElementById('taskInput');
const dueDate = document.getElementById('dueDate');
const priority = document.getElementById('priority');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = task ${task.completed ? 'completed' : ''};
        
        const taskText = document.createElement('span');
        taskText.textContent = ${task.text} (Due: ${task.dueDate});
        
        const priorityDiv = document.createElement('span');
        priorityDiv.className = priority ${task.priority};
        priorityDiv.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(index);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(priorityDiv);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(deleteBtn);
        
        taskList.appendChild(taskDiv);
    });
};

const addTask = () => {
    if (taskInput.value.trim() && dueDate.value) {
        tasks.push({ 
            text: taskInput.value.trim(), 
            dueDate: dueDate.value, 
            priority: priority.value, 
            completed: false 
        });
        taskInput.value = '';
        dueDate.value = '';
        renderTasks();
    }
};

const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

const editTask = (index) => {
    const newText = prompt('Edit task:', tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText;
        renderTasks();
    }
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

addTaskBtn.onclick = addTask;
