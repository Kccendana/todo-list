import 'jest-localstorage-mock';

import clearCompletedTasks from '../clearTask.js';
import { taskListArray, saveTasktoLocal, removeTasks } from '../taskFunctions.js';

// Mock the localStorage and DOM elements
jest.mock('../taskFunctions.js', () => ({
  taskListArray: [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: false, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
  ],
  saveTasktoLocal: jest.fn(),
  removeTasks: jest.fn(),
  addTask: jest.fn(),
  updateIndexes: jest.fn(),
}));

const mockDisplayTasks = jest.fn();

jest.mock('../../index.js', () => ({
  displayTasks: mockDisplayTasks,
}));

const emptyTasks = [];

describe('clearCompletedTasks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should clear all completed tasks', () => {
    clearCompletedTasks(taskListArray);

    expect(taskListArray.length).toBe(3);
    expect(taskListArray[0].description).toBe('Task 1');
    expect(taskListArray[0].completed).toBe(false);
    expect(taskListArray[1].description).toBe('Task 2');
    expect(taskListArray[1].completed).toBe(false);
    expect(taskListArray[2].description).toBe('Task 3');
    expect(taskListArray[2].completed).toBe(false);
    expect(saveTasktoLocal).toHaveBeenCalledTimes(1);
  });

  it('should not delete not completed tasks', () => {
    taskListArray.forEach((task) => {
      task.completed = false;
    });

    clearCompletedTasks(taskListArray);

    expect(removeTasks).not.toHaveBeenCalled();
  });

  it('should not do anything if the list is empty', () => {
    clearCompletedTasks(emptyTasks);

    expect(emptyTasks.length).toBe(0);
  });
});