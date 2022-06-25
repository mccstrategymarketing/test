import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { actionAddTask } from "../Redux/action";
export default function FormTaskCreate() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [input, setInput] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    const inputText = event.target[0].value;
    if (!inputText) return;
    dispatch(actionAddTask(inputText));
    setInput("");
  };

  return (
    <form onSubmit={submitForm}>
      form
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </form>
  );
}
