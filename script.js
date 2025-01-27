function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
  
      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('done');
      });
  
      taskList.appendChild(taskItem);
      taskInput.value = ''; // clear input after adding task
    }
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  