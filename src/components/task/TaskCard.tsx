import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import Tasks from "./Tasks";
import { TaskAddInput } from "./input/TaskAddInput";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardProps } from "../../interfaces/TaskCardProps";
import { TaskType } from "../../interfaces/TaskType";

export default function TaskCard({taskCardsList,setTaskCardsList,taskCard,index}: TaskCardProps ) {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);


  return (
    <Draggable
    draggableId={taskCard.id}
    index={index}
    >
      {(provided)=>(
    <div className="taskCard"
    ref={provided.innerRef}
    {...provided.draggableProps}

    >

    <div className="taskCardTitleAndTaskardDeleteButtonArea"
        {...provided.dragHandleProps}
        >
    <TaskCardTitle />
    <TaskCardDeleteButton
    taskCardsList={taskCardsList}
    setTaskCardsList={setTaskCardsList}
    taskCard={taskCard}
    />
    </div>
        <TaskAddInput
          inputText={inputText}
          setInputText={setInputText}
          setTaskList={setTaskList}
          taskList={taskList}
        />
        <Tasks
          inputText={inputText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
      )}
    </Draggable>

  );
  
}
