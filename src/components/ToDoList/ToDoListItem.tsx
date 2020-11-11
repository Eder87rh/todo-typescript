import * as React from "react";
import IToDo from "./IToDo";
import Styles from "./toDoList.module.css";

export type ToDoListItemProps = { toDoItem: IToDo };
export const ToDoListItem: React.FC<ToDoListItemProps> = ({ toDoItem }) => {
  console.log({ toDoItem });
  return (
    <div className={Styles.todoItem}>
      <input
        type="checkbox"
        style={{ marginRight: "1rem" }}
        name="todo-checked"
        id="todo-checked"
        checked={toDoItem.checked}
      />
      <p>{toDoItem.title}</p>
    </div>
  );
};

export default ToDoListItem;
