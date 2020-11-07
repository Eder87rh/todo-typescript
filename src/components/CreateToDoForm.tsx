import * as React from 'react';
import IToDo from './ToDoList/IToDo';

export type CreateToDoFormProps = { toDo?: IToDo[] }
export const CreateToDoForm: React.FC<CreateToDoFormProps> = ({ toDo }) => {
  console.log({ toDo })
  // const [, set] = React.useState();
  // React.useEffect(() => { }, [])
  return (
    <div>Form</div>
  )
};

export default CreateToDoForm;