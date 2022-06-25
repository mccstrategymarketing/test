import { ADD_TASK } from "./type";
export function taskListReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        state: [...state, action.payload],
      };
    default:
      return state;
  }
}
