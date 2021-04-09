import React, { useEffect, useState } from "react";
import { getTasks } from "../services/actions";
import Search from "./Search";
import TaskCard from "./TaskCard";

export default function Home(props) {
  const { tasks, handleSetTasks } = props;
  useEffect(() => {
    handleSetTasks();
  }, []);
  return (
    <>
      <Search {...props} />
      <div className="grid">
        {tasks.length ? (
          tasks?.map((task) => <TaskCard {...props} task={task} />)
        ) : (
          <h4>No results</h4>
        )}
      </div>
    </>
  );
}
