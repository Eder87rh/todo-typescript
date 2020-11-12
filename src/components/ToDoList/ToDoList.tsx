import * as React from "react";
import ToDoListItem from "./ToDoListItem";
import IToDo from "./IToDo";
import Style from "./toDoList.module.css";

export const ToDoList: React.FC = () => {
  const [toDoList, setToDoList] = React.useState<IToDo[]>([
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
      checked: false,
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      checked: false,
    },
  ]);

  return (
    <div className={Style.todoContainer}>
      {toDoList.map((toDoItem: IToDo) => (
        <ToDoListItem key={toDoItem.id} toDoItem={toDoItem} />
      ))}
    </div>
  );
};

export default ToDoList;
