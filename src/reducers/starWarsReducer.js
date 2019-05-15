import {FETCHING_CHARS, FETCHING_CHARS_SUCCESS, FETCHING_CHARS_FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCHING_CHARS_SUCCESS:
    console.log("success", action.payload)
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null
      
      }
    case FETCHING_CHARS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: "error"
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
