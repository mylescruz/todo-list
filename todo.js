// Global Variables
let tasks = document.querySelector('.tasks');

// Functions creating, completing and deleting tasks
function deleteTask() {
    console.log("Button clicked: ", this);
    console.log("Parent node: ", this.parentNode);
    this.parentNode.remove();
}

// Function to create task
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
        deleteButton.classList.add('class','delete');
        deleteButton.innerHTML = '&#128465';
        
        newTask.appendChild(deleteButton);
        
        input.value = "";

        tasks.appendChild(newTask);

        deleteButton.addEventListener('click', deleteTask); 
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
    });
});