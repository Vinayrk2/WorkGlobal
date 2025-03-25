import { FETCH_HOLIDAYS_REQUEST, FETCH_HOLIDAYS_SUCCESS, FETCH_HOLIDAYS_FAILURE } from "../actions/holidayActions"

const initialState = {
  holidays: [],
  loading: false,
  error: null,
}

const holidayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOLIDAYS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case FETCH_HOLIDAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        holidays: action.payload,
        error: null,
      }

    case FETCH_HOLIDAYS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default holidayReducer

