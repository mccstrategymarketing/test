import React from "react";
import FormTaskCreate from "./FormTaskCreate";
import ItemTask from "./ItemTask";

export default function TaskBlock() {
  return (
    <div>
      <h2> Priority tasks</h2>

      <FormTaskCreate />
      <div></div>
    </div>
  );
}
