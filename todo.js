// Global Variables
let tasks = document.querySelector('.tasks');
let taskCount = 0;

// Handle new task being created
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', () => {
        taskCount += 1;
        let newTask = document.createElement('div');
        let input = document.querySelector('.new-task').value;
        newTask.textContent = input;
        newTask.setAttribute('class','task');
        newTask.setAttribute('id','task-'+taskCount);
        tasks.appendChild(newTask);
    });
});