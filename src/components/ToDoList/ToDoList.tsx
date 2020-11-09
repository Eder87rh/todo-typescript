import * as React from "react";
import ToDoListItem from "./ToDoListItem";
import IToDo from "./IToDo";
import Style from "./toDoList.module.css";

export const ToDoList: React.FC = () => {
  const [toDoList, setToDoList] = React.useState<IToDo[]>([
    {
      id: 1,
      title: "title",
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
