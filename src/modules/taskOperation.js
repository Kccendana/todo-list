/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { saveTasktoLocal, deleteTasktoLocal } from './resetTask.js';

export default class TaskList {
  constructor() {
    this.taskListArray = JSON.parse(localStorage.getItem('taskItems')) || [];
    this.taskListDiv = document.querySelector('#list-container');
    this.form = document.querySelector('.form');
    this.titleInput = document.querySelector('#title');
    this.clearButton = document.getElementById('clearButton');
    this.title = this.titleInput.value;
    this.resetAll = document.querySelector('#resetAll');

    this.displayTasks();
    this.addEventListeners();
  }

  addTask = (title) => {
    const task = {
	  index: this.taskListArray.length + 1,
	  title,
	  completed: false,
	  };
	  this.taskListArray.push(task);
	  saveTasktoLocal();
	  this.displayTasks();
  };

  removeTasks = (index) => {
    this.taskListArray.splice(index, 1);
    this.updateIndexes();
    saveTasktoLocal();
    this.displayTasks();
  };

  toggleTaskCompletion = (index) => {
    this.taskListArray[index].completed = !this.taskListArray[index].completed;
    saveTasktoLocal();
    this.displayTasks();
  };

  updateIndexes = () => {
    this.taskListArray.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  clearCompletedTasks = () => {
    this.taskListArray = this.taskListArray.filter((task) => !task.completed);
    this.updateIndexes();
    saveTasktoLocal();
    this.displayTasks();
  };

  editTaskDescription = (index, newTitle) => {
    this.taskListArray[index].title = newTitle;
    saveTasktoLocal();
  };

  displayTasks = () => {
    this.taskListDiv.innerHTML = '';

    this.taskListArray.forEach((task, index) => {
	  this.taskListDiv.innerHTML += `
      <li draggable="true" data-index="${index}" class= "draggable-list">
      <div class="checkbox-container">
      <input class="checkbox" type="checkbox" name="${task.title}" ${task.completed ? 'checked' : ''}>
      <input class="task-title" type="text" value="${task.title}">
      </div>
      <button class="button" id="remove" data-index="${index}"><i class="fa-solid fa-ellipsis-vertical"></i></button>
      </li>`;
	  });

	  const checkboxes = document.querySelectorAll('.checkbox');
	  checkboxes.forEach((checkbox, index) => {
	    checkbox.addEventListener('change', () => {
	      this.toggleTaskCompletion(index);
	    });
	  });

	  const titleInputs = document.querySelectorAll('.task-title');
	  titleInputs.forEach((titleInput, index) => {
	    titleInput.addEventListener('input', (event) => {
	      const newTitle = event.target.value;
	      this.editTaskDescription(index, newTitle);
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
  };

	addEventListeners = () => {
	  this.form.addEventListener('submit', (event) => {
	    event.preventDefault();
	    this.addTask(this.titleInput.value);
	    this.titleInput.value = '';
	  });

	  this.resetAll.addEventListener('click', () => {
	    if (this.taskListArray.length === 0) {
	      return;
	    }

	    this.taskListArray = [];
	    deleteTasktoLocal();
	    this.displayTasks();
	  });
	};

	static initialize() {
	  const taskList = new TaskList();
	  return taskList;
	}
}
