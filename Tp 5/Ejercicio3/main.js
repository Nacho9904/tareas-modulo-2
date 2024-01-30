document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Por favor, ingresa una tarea válida.');
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-danger btn-sm';
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.addEventListener('click', function () {
        listItem.remove();
      });
  
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    });
  });