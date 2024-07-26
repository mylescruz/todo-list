// Global Variables
let tasks = document.querySelector('.tasks');
let completedCreated = false;

// Create completed section
function createCompleted() {
    let completedTasks = document.createElement('div');
    completedTasks.classList.add('completed');
    let title = document.createElement('p');
    title.classList.add('completed-title');
    title.innerHTML = "Completed";
    completedTasks.appendChild(title);
    tasks.appendChild(completedTasks);
}

// Functions creating, completing and deleting tasks
function completeTask() {
    let currentTask = this.parentNode;
    let taskText = currentTask.firstChild.innerHTML;
    currentTask.remove();

    let completed = document.createElement('p');
    completed.innerHTML = taskText;
    console.log(completed.innerHTML);

    if (!completedCreated) {
        completedCreated = true;
        createCompleted();
        
        let completedTasks = document.querySelector('.completed');
        completedTasks.appendChild(completed);
    } else {
        let completedTasks = document.querySelector('.completed');
        completedTasks.appendChild(completed);
    }
}

function deleteTask() {
    this.parentNode.remove();
}

function createTask() {
    let input = document.querySelector('.new-task');
        
    if (/\S/.test(input.value)) {
        let newTask = document.createElement('div');
        newTask.classList.add('task');

        let taskText = document.createElement('p');
        taskText.textContent = input.value;
        taskText.classList.add('text');
    
        newTask.appendChild(taskText);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '&#128465';
        
        let completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.innerHTML = '&#9989'
    
        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);
        
        input.value = "";

        if (!completedCreated) {
            tasks.appendChild(newTask);
        } else {
            let completed = document.querySelector('.completed');
            tasks.insertBefore(newTask, completed);
        }

        deleteButton.addEventListener('click', deleteTask); 
        completeButton.addEventListener('click', completeTask);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Handle add button being clicked
    document.getElementById('add').addEventListener('click', createTask);

    // Handle enter button pressed to add task
    window.addEventListener('keydown', event => {
        if (event.code === 'Enter') {
            createTask();
        }
    });
});