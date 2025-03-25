import { ADD_TASK, DELETE_TASK, LOAD_TASKS } from "../actions/taskActions"

const initialState = []

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload)

    case LOAD_TASKS:
      return action.payload

    default:
      return state
  }
}

export default taskReducer

