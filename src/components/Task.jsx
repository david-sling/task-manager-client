import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
    <center>
      <br />
      <TaskCard {...props} task={task} />
      <br />
      Link to share:{" "}
      <Link to={`/${taskId}`}>
        <span className="link">https://taskmanager.davidsling.in/{taskId}</span>
      </Link>
    </center>
  );
}
