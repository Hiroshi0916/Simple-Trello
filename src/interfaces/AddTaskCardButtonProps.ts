import { TaskCardType } from "./TaskCardType";

export interface AddTaskCardButtonProps {
    taskCardsList:TaskCardType[]; // Ideally, define the shape of the objects in the array.
    setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCardType[]>>; 
  };