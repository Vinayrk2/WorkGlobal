import { combineReducers } from "redux"
import taskReducer from "./taskReducer"
import holidayReducer from "./holidayReducer"

const rootReducer = combineReducers({
  tasks: taskReducer,
  holidays: holidayReducer,
})

export default rootReducer

