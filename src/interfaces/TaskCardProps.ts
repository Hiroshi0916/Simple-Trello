import { TaskCardType } from "./TaskCardType";

export type TaskCardProps = {
  taskCardsList: TaskCardType[];
  setTaskCardsList: React.Dispatch<React.SetStateAction<{ id: string; draggableId: string; }[]>>;
  taskCard: TaskCardType;
  index: number;

  }