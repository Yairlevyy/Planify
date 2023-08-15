// Navigation through the app 

function displayNextContainer(e) {
    const actual_container = e.target.parentNode;
    const next_container = actual_container.nextElementSibling;

    actual_container.style.display = 'none';
    next_container.style.display = 'flex';
};

function displayNextSubContainer(e) {
    const actual_container = e.target.parentNode.parentNode;
    const next_container = actual_container.nextElementSibling;

    actual_container.style.display = 'none';
    next_container.style.display = 'flex';
};

function displayPreviousSubContainer(e) {
    const actual_container = e.target.parentNode.parentNode;
    const next_container = actual_container.previousElementSibling;

    actual_container.style.display = 'none';
    next_container.style.display = 'flex';
};

let onboarding_container = document.getElementById('onboarding');
let kanban_container = document.getElementById('kanban');

function displayKanban() {
    displayProjectTitle();
    displayTaskFromOnboarding();

    onboarding_container.style.display = 'none';
    kanban_container.style.display = 'flex';
}

let container_add_task = document.getElementById('add-task');

function displayAddTask() {
    container_add_task.style.display = 'flex'
}

// Function to get the input user and append them to the kanban grid.

let project_title_input = document.getElementById('project_title');
let project_title_kanban = document.querySelector('.project_title_kanban');

let task_one_title_input = document.getElementById('task_one_title');
let task_one_descript_input = document.getElementById('task_one_descript');

let task_two_title_input = document.getElementById('task_two_title');
let task_two_descript_input = document.getElementById('task_two_descript');

let task_three_title_input = document.getElementById('task_three_title');
let task_three_descript_input = document.getElementById('task_three_descript');

let project_details_todo = document.getElementById('project_details_todo');

function displayProjectTitle() {
    const title = project_title_input.value;
    const h1 = document.createElement('h1');
    h1.innerHTML = title;
    project_title_kanban.appendChild(h1)
};

function displayTask(title,descript) {
    const div = document.createElement('div');
    div.classList.add('task');
    div.setAttribute('draggable',true);
    div.addEventListener('dragstart',function(event){
        event.dataTransfer.setData("text/plain",event.target.id)
    });
    div.setAttribute('id',title.slice(0,8));
    const h2 = document.createElement('h2');
    h2.innerHTML = title;
    div.appendChild(h2);
    const p = document.createElement('p');
    p.innerHTML = descript;
    div.appendChild(p);
    project_details_todo.appendChild(div)
};

function displayTaskFromOnboarding() {
    const task_one_title = task_one_title_input.value;
    const task_one_descript = task_one_descript_input.value;

    const task_two_title = task_two_title_input.value;
    const task_two_descript = task_two_descript_input.value;

    const task_three_title = task_three_title_input.value;
    const task_three_descript = task_three_descript_input.value;

    displayTask(task_one_title,task_one_descript);
    displayTask(task_two_title,task_two_descript);
    displayTask(task_three_title,task_three_descript);
};

// Enable to drag and drop the tasks.

function onDragOverProjectDetails(e){
    e.preventDefault();
};

function onDropOverProjectDetails(e){
    e.preventDefault();

    const id = e.dataTransfer.getData("text/plain");

    const task = document.getElementById(id);
    e.target.appendChild(task)
};        

// Enable to add a task

let new_task_title_input = document.getElementById('new_task_title');
let new_task_descript_input = document.getElementById('new_task_descript');

function unDisplayAddTask() {
    let new_task_title = new_task_title_input;
    let new_task_descript = new_task_descript_input;

    displayTask(new_task_title.value,new_task_descript.value)

    new_task_title.value = '';
    new_task_descript.value = '';

    container_add_task.style.display = 'none'
};

