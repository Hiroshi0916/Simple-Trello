import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { ReorderArgs } from "../../interfaces/ReordereArgs";

const reorder =({taskList,startIndex, endIndex}:ReorderArgs)=>{
  const newList =[...taskList];

  const [removed] = newList.splice(startIndex,1);
  newList.splice(endIndex,0,removed);
  return newList;
}

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id:"0",
    draggableId:"item0",

  }
  ]);

  const handleDragEnd=(result:DropResult)=>{
    if (!result.destination) return;

    const newTaskCardsList =  reorder({
      taskList: taskCardsList,
      startIndex: result.source.index,
      endIndex: result.destination.index
    });

    setTaskCardsList(newTaskCardsList);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided)=>(
      <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
      {taskCardsList.map((taskCard,index) => (
        <TaskCard key={taskCard.id}
        index={index}
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
        taskCard={taskCard}
        />
      ))}
      {provided.placeholder}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
        )}

      </Droppable>
    </DragDropContext>
  );
};
