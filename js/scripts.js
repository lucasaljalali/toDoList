// add task function
function addTask() {
    
    const taskTitle = document.querySelector('#taskTitle').value;
    
    if(taskTitle) {
        //clon template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
        //add title  
        newTask.querySelector('.taskTitle').textContent = taskTitle;
        //remove unnecessary classes
        newTask.classList.remove('template');
        newTask.classList.remove('hide');
        //add task on list
        const list = document.querySelector('#taskList');
        list.appendChild(newTask);
        //add event on remove button
        const removeBtn = newTask.querySelector('.removeBtn').addEventListener('click', function() {
            removeTask(this);
        });
        //add event on done button
        const doneBtn = newTask.querySelector('.doneBtn').addEventListener('click', function() {
            completeTask(this);
        });
        //clean text
        document.querySelector('#taskTitle').value = '';
    };
}

// remove task function 
function removeTask(task) {
    task.parentNode.remove(true);
}

// task completed function
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done');
}

// add task event
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', function(e) {

    e.preventDefault();

    addTask();
});