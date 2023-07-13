export const saveTasktoLocal = () => {
    localStorage.setItem("taskItems", JSON.stringify(this.taskListArray));
};

export const deleteTasktoLocal = () => {
    localStorage.removeItem("taskItems");
};
