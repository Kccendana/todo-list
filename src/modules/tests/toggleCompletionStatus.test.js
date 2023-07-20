import toggleTaskCompletion from '../statusFunctions.js';
import { taskListArray } from '../taskFunctions.js';

describe('toggleTaskCompletion status', () => {
  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn(() => JSON.stringify(taskListArray)),
      setItem: jest.fn(),
    };

    // Set initial data
    taskListArray.splice(0, taskListArray.length, // Clear the array
      { title: 'Task 1', completed: false, index: 1 },
      { title: 'Task 2', completed: false, index: 2 });
  });

  afterEach(() => {
    jest.resetAllMocks();
    delete global.localStorage;
  });

  test('should update the completed status of a task', () => {
    const index = 0;
    const newCompletedStatus = true;

    toggleTaskCompletion(index, newCompletedStatus);

    expect(taskListArray[index].completed).toBe(newCompletedStatus);
  });

  test('should update the tasks in localStorage', () => {
    const index = 1;
    const newCompletedStatus = true;

    toggleTaskCompletion(index, newCompletedStatus);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'taskItems',
      JSON.stringify([
        { title: 'Task 1', completed: false, index: 1 },
        { title: 'Task 2', completed: newCompletedStatus, index: 2 },
      ]),
    );
  });
});