import ItemTask from "./ItemTask";
import { useSelector, useDispatch } from "react-redux";
export default function ListTasks() {
  const store = useSelector((state) => state);

  return (
    <div>
      {store.tasks.map((item) => {
        return (
          <ItemTask
            key={item.id}
            task={item.taskName}
            id={item.id}
            taskStatus={item.taskStatus}
          />
        );
      })}
    </div>
  );
}
