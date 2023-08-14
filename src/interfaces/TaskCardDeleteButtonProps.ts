import { TaskCardType } from "./TaskCardType";
import { TaskType } from "./TaskType";

export interface TaskCardDeleteButtonProps{
    taskCardsList: TaskCardType[];
    setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCardType[]>>;
    taskCard: TaskCardType; // ここに適切な型を指定
}