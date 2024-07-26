// Global Variables
let tasks = document.querySelector('.tasks');
let taskCount = 0;

// Handle new task being created
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', () => {
        let input = document.querySelector('.new-task');
        
        if (/\S/.test(input.value)) {
            taskCount += 1;
            let newTask = document.createElement('div');
            
            newTask.textContent = input.value;
            newTask.setAttribute('class','task');
            newTask.setAttribute('id','task-'+taskCount);
            tasks.appendChild(newTask);
            let checkBox = document.createElement('input');
            checkBox.setAttribute('type','checkbox');
            checkBox.setAttribute('class','check-box');
            newTask.appendChild(checkBox);
            input.value = "";
        }
    });
});