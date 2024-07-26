// Global Variables
let tasks = document.querySelector('.tasks');
let taskCount = 0;

// Function to create task
function createTask() {
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
        checkBox.setAttribute('class','checkbox');
        checkBox.setAttribute('id','checkbox-'+taskCount);
        newTask.appendChild(checkBox);
        input.value = "";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Handle new task being created
    document.getElementById('add').addEventListener('click', createTask);

    // Handle enter button pressed to add task
    window.addEventListener('keydown', event => {
        if (event.code === 'Enter') {
            createTask();
        }
    })
});