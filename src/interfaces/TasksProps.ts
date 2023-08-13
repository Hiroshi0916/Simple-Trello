import { Dispatch, SetStateAction } from 'react';

export interface TasksProps {
    inputText: string;
    taskList: any[];
    setTaskList: Dispatch<SetStateAction<any[]>>;
  }
