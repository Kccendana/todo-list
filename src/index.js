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
      localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
      this.displayTasks();
    }
  
    toggleTaskCompletion(index) {
      this.taskListArray[index].completed = !this.taskListArray[index].completed;
      localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
      this.displayTasks();
    }
  
    clearCompletedTasks() {
      this.taskListArray = this.taskListArray.filter((task) => !task.completed);
      localStorage.setItem('taskItems', JSON.stringify(this.taskListArray));
      this.displayTasks();
    }
  
    displayTasks() {
      this.taskListDiv.innerHTML = '';
  
      this.taskListArray.forEach((task, index) => {
        this.taskListDiv.innerHTML += `
        <li>
          <div class="checkbox-container">
            <input class="checkbox" type="checkbox" name="${task.title}" ${task.completed ? 'checked' : ''}>
            <input class="task-title" type="text" value="${task.title}" readonly>
          </div>
          <button class="button" id="remove" data-index="${index}">-</button>
        </li>`;
      });
  
      const checkboxes = document.querySelectorAll('.checkbox');
      checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
          this.toggleTaskCompletion(index);
        });
      });
  
      this.removeBtns = document.querySelectorAll('.button');
      this.removeBtns.forEach((button) => {
        button.addEventListener('click', (event) => {
          const { index } = event.target.dataset;
          this.removeTasks(index);
        });
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