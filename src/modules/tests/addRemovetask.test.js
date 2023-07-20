/* eslint-disable consistent-return */
import 'jest-localstorage-mock';

import { addTask, removeTasks, taskListArray } from '../taskFunctions.js';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock DOM
const taskListDivMock = document.createElement('ul');
const formMock = document.createElement('form');
const clearBtnMock = document.createElement('button');
document.getElementById = jest.fn((id) => {
  if (id === 'list-container') return taskListDivMock;
  if (id === 'add-new') return formMock;
});
document.querySelector = jest.fn((selector) => {
  if (selector === '.clear-completed') return clearBtnMock;
});

describe('taskFunctions', () => {
  beforeEach(() => {
    taskListArray.length = 0;
    jest.clearAllMocks();
  });

  describe('addTask', () => {
    test('should add a new task to the tasks array and update localStorage', () => {
      const title = 'Task 1';
      addTask(title);

      expect(taskListArray).toHaveLength(1);
      expect(taskListArray[0].title).toBe(title);
      expect(taskListArray[0].completed).toBe(false);
      expect(taskListArray[0].index).toBe(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'taskItems',
        JSON.stringify(taskListArray),
      );
    });

    test('should not add a task if the description is empty', () => {
      const title = '';
      addTask(title);

      expect(taskListArray).toHaveLength(0);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });

  
});