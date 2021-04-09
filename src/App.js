import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonAppBar from "./components/AppBar";
import Home from "./components/Home";
import Task from "./components/Task";
import { getTasks } from "./services/actions";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const handleSetTasks = () => {
    getTasks(setTasks);
  };
  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar
          handleSetTasks={handleSetTasks}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Switch>
          <Route path="/:taskId">
            <Task
              handleSetTasks={handleSetTasks}
              tasks={tasks}
              setTasks={setTasks}
            />
          </Route>
          <Route path="/">
            <Home
              handleSetTasks={handleSetTasks}
              tasks={tasks}
              setTasks={setTasks}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
