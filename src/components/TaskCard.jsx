import React, { useState } from "react";
import {
  CardActionArea,
  CardHeader,
  Typography,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  makeStyles,
} from "@material-ui/core";
import EditTask from "./EditTask";
import { deleteTask } from "../services/actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function TaskCard({ task, setTasks, handleSetTasks }) {
  const classes = useStyles();
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={task?.title}
            height="140"
            image={task?.image}
            title={task?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {task?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {task?.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => setEditOpen(true)}
          >
            EDIT
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => deleteTask(task?._id, handleSetTasks)}
          >
            DELETE
          </Button>
          <Link to={`/${task?._id}`}>
            <Button size="small" color="primary">
              SHARE
            </Button>
          </Link>
        </CardActions>
      </Card>
      {editOpen && (
        <EditTask
          setTasks={setTasks}
          task={task}
          open={editOpen}
          setOpen={setEditOpen}
          handleSetTasks={handleSetTasks}
        />
      )}
    </>
  );
}
