import { TaskType } from "./TaskType";

export interface TaskProps {
    task: TaskType; 
    taskList: TaskType[]; 
    setTaskList: (newTaskList: TaskType[]) => void; 
    index: number; 
}