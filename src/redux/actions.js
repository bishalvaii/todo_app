let nextTaskId = 1;
export const addTask = (text) => ({
  type: "ADD_TASK",
  payload: {
    id: nextTaskId++,
    text,
    completed: false,
  },
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: id,
});
