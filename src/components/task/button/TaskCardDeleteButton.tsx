import React from 'react'
import { TaskCardDeleteButtonProps } from '../../../interfaces/TaskCardDeleteButtonProps';
import { TaskType } from '../../../interfaces/TaskType';
import { TaskCardType } from '../../../interfaces/TaskCardType';

export default function TaskCardDeleteButton({
  taskCardsList,
  setTaskCardsList,
  taskCard
}: TaskCardDeleteButtonProps) {
  const taskCardDeleteButton=(id:string)=>{
    setTaskCardsList(taskCardsList.filter((e:TaskCardType)=>e.id !== id));
  }
  return (
    <div>
      <button className="taskCardDeleteButton"
      onClick={()=>taskCardDeleteButton(taskCard.id)}>
<i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
  )
}
