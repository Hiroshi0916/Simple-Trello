import { TaskType } from "./TaskType";

export interface TaskAddInputProps {
    inputText: string;
    setInputText: (value: string) => void;
    setTaskList: (tasks:TaskType[])=>void;
    taskList: TaskType[]; 
}