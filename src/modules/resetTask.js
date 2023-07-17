export const saveTasktoLocal = () => {
  localStorage.setItem('taskItems', JSON.stringify(taskListArray));
};

export const deleteTasktoLocal = () => {
  localStorage.removeItem('taskItems');
};
