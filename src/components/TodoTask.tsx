import React from "react";
import { iTask } from "../interfaces";

interface Props {
  task: iTask;
  completeTask(taskNameToDelete: string): void;
}

function TodoTask({ task, completeTask }: Props) {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        &times;
      </button>
    </div>
  );
}

export default TodoTask;
