// Global Variables
let tasks = document.querySelector('.tasks');

// Handle new task being created
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', () => {
        let input = document.querySelector('.new-task').value;
        let newTask = document.createElement('div');
        newTask.textContent = input;
        tasks.appendChild(newTask);
    });
});