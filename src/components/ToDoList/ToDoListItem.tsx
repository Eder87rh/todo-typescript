import * as React from "react";
import IToDo from "./IToDo";
import Styles from "./toDoList.module.css";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

export type ToDoListItemProps = { toDoItem: IToDo };
export const ToDoListItem: React.FC<ToDoListItemProps> = ({ toDoItem }) => {
  console.log({ toDoItem });
  return (
    <div className={Styles.todoItem}>
      <div className={Styles.notes}>
        <input
          type="checkbox"
          style={{ marginRight: "1rem" }}
          name="todo-checked"
          id="todo-checked"
          checked={toDoItem.checked}
        />
        <p>{toDoItem.title}</p>
      </div>
      <MenuIcon className={Styles.menuIcon} />
    </div>
  );
};

export default ToDoListItem;
