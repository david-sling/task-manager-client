import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import { editTask, addTask, getTasks } from "../services/actions";

export default function EditTask({
  task,
  open,
  setOpen,
  add,
  setTasks,
  handleSetTasks,
}) {
  const [editor, setEditor] = useState(task);

  const handleClose = () => {
    setOpen(false);
    handleSetTasks();
  };

  const encode = (file) => {
    if (!file) return;
    var reader = new FileReader();
    reader.onloadend = function () {
      setEditor({ ...editor, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            required
            value={editor?.title}
            onChange={({ target: { value } }) =>
              setEditor({ ...editor, title: value })
            }
          />
          <TextField
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            value={editor?.content}
            onChange={({ target: { value } }) =>
              setEditor({ ...editor, content: value })
            }
          />
          <div
            style={{
              maxWidth: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              src={editor?.image}
              alt=""
            />
          </div>
          <Input
            id="content"
            label="Content"
            type="file"
            fullWidth
            //value={editor.image}
            onChange={({
              target: {
                files: [file],
              },
            }) => encode(file)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={
              add
                ? () => addTask(editor, handleClose)
                : () => editTask(editor, handleClose)
            }
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
