document.addEventListener('DOMContentLoaded', () => {

    // 1. UNIVERSAL TASK CREATION FUNCTION
    function createTask(taskText, dueDateValue, list) {
        const li = document.createElement('li');
        const createdDate = new Date().toLocaleDateString();
        const taskContent = document.createElement('div');

        taskContent.innerHTML = `
            <strong>${taskText}</strong><br>
            <small>Created: ${createdDate}</small><br>
            <small>Due: ${dueDateValue || 'No due date'}</small>
        `;

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✓';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            const updatedTask = prompt('Update your task:', taskText);
            if (updatedTask !== null && updatedTask.trim() !== '') {
                taskContent.innerHTML = `
                    <strong>${updatedTask}</strong><br>
                    <small>Created: ${createdDate}</small><br>
                    <small>Due: ${dueDateValue || 'No due date'}</small>
                `;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        btnContainer.appendChild(completeBtn);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        li.appendChild(taskContent);
        li.appendChild(btnContainer);
        list.appendChild(li);
    }

    // 2. WORK SECTION
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const dueDate = document.getElementById('dueDate');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        createTask(taskText, dueDate.value, taskList);

        taskInput.value = '';
        dueDate.value = '';
    };

    if (addTaskBtn && taskInput) {
        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') addTask();
        });
    }

    // 3. HOME SECTION
    const homebtn = document.getElementById('homebtn');
    const homeTask = document.getElementById('homeTask');
    const homeList = document.getElementById('homeList');

    const addHomeTask = () => {
        const taskText = homeTask.value.trim();
        if (!taskText) return;

        createTask(taskText, '', homeList);

        homeTask.value = '';
    };

    if (homebtn && homeTask) {
        homebtn.addEventListener('click', addHomeTask);
        homeTask.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') addHomeTask();
        });
    }
});
