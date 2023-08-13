import React from "react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { TasksProps } from "../../interfaces/TasksProps";

const Tasks: React.FC<TasksProps>=({ taskList, setTaskList })=> {
  if (!taskList) return null;

  const reorder=(taskList,startIndex,endIndex)=>{
    const newList =[...taskList];
    const [removed] =newList.splice(startIndex, 1);
    newList.splice(endIndex, 0, removed);
    return newList;
  }

  const handleDragEnd = (result) => {
    if(!result.destination)return;

    const newTaskList =reorder(taskList,result.source.index,result.destination.index);
    setTaskList(newTaskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default Tasks;