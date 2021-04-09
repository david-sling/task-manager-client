import React, { useEffect, useState } from "react";
import { getTasks } from "../services/actions";
import TaskCard from "./TaskCard";

export default function Home(props) {
  const { tasks, handleSetTasks } = props;
  useEffect(() => {
    handleSetTasks();
  }, []);
  return (
    <div className="grid">
      {tasks?.map((task) => (
        <TaskCard {...props} task={task} />
      ))}
    </div>
  );
}
