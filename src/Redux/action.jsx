import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "./type";

export function actionAddTask(taskText) {
  return {
    type: ADD_TASK,
    payload: taskText,
  };
}

export function actionDeleteTask(taskID) {
  return {
    type: DELETE_TASK,
    payload: taskID,
  };
}

export function actionStatusToggle(taskID) {
  return {
    type: TOGGLE_STATUS,
    payload: taskID,
  };
}
