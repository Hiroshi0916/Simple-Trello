import { TaskType } from './TaskType';

export interface TasksProps {
    inputText: string;
    taskList: TaskType[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
  }
