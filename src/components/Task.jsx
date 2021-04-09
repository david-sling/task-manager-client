import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTask } from "../services/actions";
import TaskCard from "./TaskCard";

export default function Task(props) {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    getTask(taskId, setTask);
  }, []);
  console.log(taskId);
  return (
    <div>
      <TaskCard {...props} task={task} />
    </div>
  );
}
