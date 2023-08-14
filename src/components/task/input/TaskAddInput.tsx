import React from "react";
import { v4 as uuid } from 'uuid';
import { TaskAddInputProps } from "../../../interfaces/TaskAddInputProps";

export const TaskAddInput:React.FC<TaskAddInputProps> = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    const taskId =uuid();
    e.preventDefault();
    if(inputText ===""){
      return;
    }

    setTaskList([
      ...taskList,
      {
        id:taskId ,
        draggableId:`task-${taskId }`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
