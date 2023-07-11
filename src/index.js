import './style.css';

const tasks = [
  {
    title: 'Buy groceries',
    completed: false,
    index: 1,
  },
  {
    title: 'Walk the dog',
    completed: true,
    index: 2,
  },
  {
    title: 'Finish homework',
    completed: false,
    index: 3,
  },
];

function displayTasks() {
  const taskList = document.getElementById('list-container');

  // Clear existing list
  taskList.innerHTML = '';

  // Sort tasks based on index
  const sortedTasks = tasks.sort((a, b) => a.index - b.index);

  // Create list items for each task
  sortedTasks.forEach((task, index) => {
    taskList.innerHTML += `
        <li>
          <div class="checkbox-container">
            <input class="checkbox" type="checkbox" name="${task.title}" ${task.completed ? 'checked' : ''}>
            <input class="task-title" type="text" value="${task.title}" readonly>
          </div>
          <button class="button" id="remove" data-index="${index}">-</button>
        </li>`;
  });
}

// Call renderTasks function on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});
