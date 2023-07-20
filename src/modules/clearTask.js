import { taskListArray, updateIndexes, saveTasktoLocal } from './taskFunctions.js';

const clearCompletedTasks = () => {
  const incompleteTasks = taskListArray.filter((task) => !task.completed);
  taskListArray.splice(0, taskListArray.length, ...incompleteTasks);
  updateIndexes();
  saveTasktoLocal();
};

export default clearCompletedTasks;