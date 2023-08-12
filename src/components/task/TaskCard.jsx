import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import Tasks from "./Tasks";
import { TaskAddInput } from "./input/TaskAddInput";
import { Draggable } from "react-beautiful-dnd";

export default function TaskCard({taskCardsList,setTaskCardsList,taskCard,index} ) {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

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