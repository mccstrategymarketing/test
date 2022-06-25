import { combineReducers } from "redux";
import { taskListReducer } from "./TaskListReducer";
import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "./type";

const initState = {
  tasks: [],
};

export function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            taskName: action.payload,
            id: new Date().getMilliseconds().toString(),
            taskStatus: false,
          },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          return item.id == action.payload ? { item: item.taskStatus } : item;
        }),
      };

    default:
      return state;
  }
}
