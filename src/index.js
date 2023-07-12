import './style.css';

class TaskList {
  constructor() {
    this.taskListArray = JSON.parse(localStorage.getItem('taskItems')) || [];
    this.taskListDiv = document.querySelector('#list-container');
    this.form = document.querySelector('.form');
    this.titleInput = document.querySelector('#title');
    this.clearButton = document.getElementById('clearButton');
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
    this.updateIndexes();
    localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
    this.displayTasks();
  }

  toggleTaskCompletion(index) {
    this.taskListArray[index].completed = !this.taskListArray[index].completed;
    localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
    this.displayTasks();
  }

  updateIndexes() {
    this.taskListArray.forEach((task, index) => {
      task.index = index + 1;
    });
  }

  clearCompletedTasks() {
    this.taskListArray = this.taskListArray.filter((task) => !task.completed);
    this.updateIndexes();
    localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
    this.displayTasks();
  }

  editTaskDescription(index, newTitle) {
    this.taskListArray[index].title = newTitle;
    localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
  }

  displayTasks() {
    this.taskListDiv.innerHTML = '';

    this.taskListArray.forEach((task, index) => {
      const listItem = document.createElement('li');

      const checkboxContainer = document.createElement('div');
      checkboxContainer.className = 'checkbox-container';

      const checkbox = document.createElement('input');
      checkbox.className = 'checkbox';
      checkbox.type = 'checkbox';
      checkbox.name = task.title;
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        this.toggleTaskCompletion(index);
      });

      const taskTitle = document.createElement('input');
      taskTitle.className = 'task-title';
      taskTitle.type = 'text';
      taskTitle.value = task.title;
      taskTitle.addEventListener('input', (event) => {
        const newTitle = event.target.value;
        this.editTaskDescription(index, newTitle);
      });

      const removeButton = document.createElement('button');
      removeButton.className = 'button';
      removeButton.textContent = '-';
      removeButton.dataset.index = index;
      removeButton.addEventListener('click', (event) => {
        const { index } = event.target.dataset;
        this.removeTasks(index);
      });

      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(taskTitle);

      listItem.appendChild(checkboxContainer);
      listItem.appendChild(removeButton);

      this.taskListDiv.appendChild(listItem);
    });

    this.clearButton.addEventListener('click', () => {
      this.clearCompletedTasks();
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