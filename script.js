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
    onboarding_container.style.display = 'none';
    kanban_container.style.display = 'flex';
}

let container_add_task = document.getElementById('add-task');

function displayAddTask() {
    container_add_task.style.display = 'flex'
}

function unDisplayAddTask() {
    container_add_task.style.display = 'none'
};
