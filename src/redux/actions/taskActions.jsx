// Action Types
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const LOAD_TASKS = "LOAD_TASKS"

// Action Creators
export const addTask = (task) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    })

    // Save to localStorage
    const updatedTasks = [...getState().tasks]
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }
}

export const deleteTask = (taskId) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    })

    // Update localStorage
    const updatedTasks = getState().tasks.filter((task) => task.id !== taskId)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }
}

export const loadTasks = () => {
  return (dispatch) => {
    const savedTasks = localStorage.getItem("tasks")
    const tasks = savedTasks ? JSON.parse(savedTasks) : []

    dispatch({
      type: LOAD_TASKS,
      payload: tasks,
    })
  }
}

