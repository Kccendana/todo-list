import { taskListArray, saveTasktoLocal } from './taskFunctions.js';

const toggleTaskCompletion = (index) => {
  taskListArray[index].completed = !taskListArray[index].completed;
  saveTasktoLocal();
};

export default toggleTaskCompletion;