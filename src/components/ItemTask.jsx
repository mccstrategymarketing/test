import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteTask, actionStatusToggle } from "../Redux/action";
export default function ItemTask(props) {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(actionDeleteTask(props.id));
  };
  const statusToggle = () => {
    dispatch(actionStatusToggle(props.id));
  };
  return (
    <div className={props.status ? "task done" : "task"}>
      <button onClick={statusToggle}>DONE</button>
      <p>{props.task}</p>
      <button onClick={deleteTask}>X</button>
    </div>
  );
}
