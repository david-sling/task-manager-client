import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditTask from "./EditTask";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ setTasks, handleSetTasks }) {
  const classes = useStyles();
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">TASKS</Link>
          </Typography>
          <Button color="inherit" onClick={() => setEditOpen(true)}>
            ADD
          </Button>
        </Toolbar>
        {editOpen && (
          <EditTask
            setTasks={setTasks}
            add
            open={editOpen}
            setOpen={setEditOpen}
            handleSetTasks={handleSetTasks}
          />
        )}
      </AppBar>
    </div>
  );
}
