import { TaskCardType } from "./TaskCardType";

export interface ReorderArgs {
    taskList: TaskCardType[]; 
    startIndex: number;
    endIndex: number;
 }