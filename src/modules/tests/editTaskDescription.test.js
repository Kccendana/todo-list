import 'jest-localstorage-mock';

import { editTaskDescription, taskListArray} from '../taskFunctions.js';

describe('Task Functions', () => {
  describe('editTaskDescription', () => {
    beforeEach(() => {
      taskListArray.length = 0;
      localStorage.clear();
    });

    test('should edit the task title and update localStorage', () => {
      // Arrange
      const newtitle = 'New description';
      taskListArray.push({ title: 'Old description', completed: false, index: 1 });

      // Act
      editTaskDescription(0, newtitle);

      // Assert
      expect(taskListArray[0].title).toBe(newtitle);
      expect(localStorage.getItem('taskItems')).toBe(JSON.stringify(taskListArray));
    });
  });
});
