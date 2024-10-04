<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>To-Do List</title>
</head>
<body>
    <div id="app">
        <h1>To-Do List</h1>
        <div class="input-container">
            <input type="text" id="taskInput" placeholder="Add a new task" />
            <input type="date" id="dueDate" />
            <select id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button id="addTaskBtn">Add Task</button>
        </div>
        <div class="task-list-container">
            <div id="taskList"></div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
