document.addEventListener('DOMContentLoaded', () => {

    // WORK SECTION
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const dueDate = document.getElementById('dueDate');
    const storage = 

    function createTask(taskText, dueDateValue, list) {

        const li = document.createElement('li');

        // CREATED DATE
        const createdDate = new Date().toLocaleDateString();

        // TASK CONTENT
        const taskContent = document.createElement('div');

        taskContent.innerHTML = `
            <strong>${taskText}</strong><br>
            <small>Created: ${createdDate}</small><br>
            <small>Due: ${dueDateValue || 'No due date'}</small>
        `;

        // BUTTON CONTAINER
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        // COMPLETE BUTTON
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✓';

        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // EDIT BUTTON
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        editBtn.addEventListener('click', () => {

            const updatedTask = prompt('Update your task:', taskText);

            if(updatedTask !== null && updatedTask.trim() !== ''){

                taskContent.innerHTML = `
                    <strong>${updatedTask}</strong><br>
                    <small>Created: ${createdDate}</small><br>
                    <small>Due: ${dueDateValue || 'No due date'}</small>
                `;
            }

        });

        // DELETE BUTTON
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        // APPEND BUTTONS
        btnContainer.appendChild(completeBtn);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);

        // APPEND EVERYTHING
        li.appendChild(taskContent);
        li.appendChild(btnContainer);

        list.appendChild(li);
    }

    // ADD WORK TASK
    const addTask = () => {

        const taskText = taskInput.value.trim();

        if (!taskText) {
            return;
        }

        createTask(taskText, dueDate.value, taskList);

        taskInput.value = '';
        dueDate.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', (e) => {

        if (e.key === 'Enter') {
            addTask();
        }

    });

    // HOME SECTION
    const homebtn = document.getElementById('homebtn');
    const homeTask = document.getElementById('homeTask');
    const homeList = document.getElementById('homeList');

    const addHomeTask = () => {

        const taskText = homeTask.value.trim();

        if(!taskText){
            return;
        }

        createTask(taskText, '', homeList);

        homeTask.value = '';
    };

    homebtn.addEventListener('click', addHomeTask);

    homeTask.addEventListener('keydown', (e) => {

        if(e.key === 'Enter'){
            addHomeTask();
        }

    });

});