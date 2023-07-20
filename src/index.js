/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable import/no-cycle */

import './style.css';
import {
  taskListArray, removeTasks, editTaskDescription, addTask,
} from './modules/taskFunctions.js';

import toggleTaskCompletion from './modules/statusFunctions.js';
import clearCompletedTasks from './modules/clearTask.js';

const taskListDiv = document.querySelector('#list-container');
const form = document.querySelector('#add-new');
const clearButton = document.getElementById('clearButton');
const resetAll = document.querySelector('#resetAll');

const displayTasks = () => {
  taskListDiv.innerHTML = '';

  taskListArray.forEach((task, index) => {
	  taskListDiv.innerHTML += `
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
	      toggleTaskCompletion(index);
	    });
	  });

	  const titleInputs = document.querySelectorAll('.task-title');
	  titleInputs.forEach((titleInput, index) => {
	    titleInput.addEventListener('input', (event) => {
	      const newTitle = event.target.value;
	      editTaskDescription(index, newTitle);
	    });
	  });

	  const removeBtns = document.querySelectorAll('.button');
	  removeBtns.forEach((button) => {
	    button.addEventListener('click', (event) => {
	      const { index } = event.target.dataset;
	      removeTasks(index);
      displayTasks();
	    });
	  });

	  clearButton.addEventListener('click', () => {
	    clearCompletedTasks();
    displayTasks();
	  });
};

const initializeTasks = () => {
  document.addEventListener('DOMContentLoaded', displayTasks);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const task = titleInput.value.trim();
  if (task !== '') {
    addTask(task);
    titleInput.value = '';
  }
  displayTasks();
});

resetAll.addEventListener('click', () => {
  localStorage.clear();
  taskListArray.length = 0;
  displayTasks();
});

initializeTasks();

export default displayTasks;