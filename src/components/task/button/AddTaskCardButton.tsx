import React from 'react'

import { v4 as uuid } from 'uuid';


import { AddTaskCardButtonProps } from '../../../interfaces/AddTaskCardButtonProps';

export const AddTaskCardButton:React.FC<AddTaskCardButtonProps> = ({taskCardsList,setTaskCardsList}) => {
  const addTaskCard=()=>{
    const taskCardId = uuid();

    setTaskCardsList([...taskCardsList,{
      id:taskCardId,
      draggableId:`item${taskCardId}`,
    },
  ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
      </div>
      )
}
