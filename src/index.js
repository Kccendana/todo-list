import './style.css';

class TaskList {
  constructor() {
    this.taskListArray = JSON.parse(localStorage.getItem('taskItems')) || [];
    this.taskListDiv = document.querySelector('#list-container');
    this.form = document.querySelector('.form');
    this.titleInput = document.querySelector('#title');
    this.title = this.titleInput.value;

    this.displayTasks();
    this.addEventListeners();
  }

  addTask(title) {
    const task = {
      index: this.taskListArray.length + 1,
      title,
      completed: false,
    };
    this.taskListArray.push(task);
    localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
    this.displayTasks();
  }

  removeTasks(index) {
    this.taskListArray.splice(index, 1);
    localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
    this.displayTasks();
  }

  displayTasks() {
    this.taskListDiv.innerHTML = '';

    this.taskListArray.forEach((task, index) => {
      this.taskListDiv.innerHTML += `
      <li><div class="checkbox-container">
      <input type="checkbox" name="${task.title}" ${task.completed ? 'checked' : ''}>
      <input class="task-title" type="text" value="${task.title}" readonly>
    </div>
    <button class="button" id="remove" data-index="${index}">-
    </button></li>`;
      this.removeBtns = document.querySelectorAll('.button');
      this.removeBtns.forEach((button) => {
        button.addEventListener('click', (event) => {
          const { index } = event.target.dataset;
          this.removeTasks(index);
        });
      });
    });
  }

  addEventListeners() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.addTask(this.titleInput.value);
      this.titleInput.value = '';
    });
  }

  static initialize() {
    const taskList = new TaskList();
    return taskList;
  }
}

TaskList.initialize();