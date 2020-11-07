import * as React from 'react';
import IToDo from './IToDo';

export type ToDoListItemProps = { toDoItem: IToDo }
export const ToDoListItem: React.FC<ToDoListItemProps> = ({ toDoItem }) => {
  console.log({ toDoItem })
  return (
    <div>
      <input
        type="checkbox"
        name="todo-checked"
        id="todo-checked"
        checked={toDoItem.checked}
      />
      <p>Title: {toDoItem.title}</p>
    </div>
  )
};

export default ToDoListItem;