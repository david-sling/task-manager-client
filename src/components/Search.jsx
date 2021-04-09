import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { searchTasks } from "../services/actions";

export default function Search({ setTasks, handleSetTasks }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return handleSetTasks();
    searchTasks(search, setTasks);
    console.log(search);
  }, [search]);

  return (
    <div>
      <TextField
        style={{ width: "500px", margin: 20 }}
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
        label="Search"
      />
    </div>
  );
}
