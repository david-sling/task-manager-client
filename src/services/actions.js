import axios from "axios";
import { SERVER_URL } from "../config/urls";

const getTasks = async (setTasks) => {
  const { data } = await axios.get(`${SERVER_URL}/posts`);
  setTasks(data);
};

const getTask = async (taskId, setTask) => {
  const { data } = await axios.get(`${SERVER_URL}/posts/${taskId}`);
  setTask(data);
};

const editTask = async (task, cb) => {
  console.log(task);
  const { data } = await axios.patch(`${SERVER_URL}/posts/${task._id}`, task);
  cb(data);
};

const addTask = async (task, cb) => {
  console.log(task);
  const { data } = await axios.post(`${SERVER_URL}/posts`, task);
  cb(data);
};

const deleteTask = async (taskId, cb) => {
  const { data } = await axios.delete(`${SERVER_URL}/posts/${taskId}`);
  cb(data);
};

export { getTasks, getTask, editTask, addTask, deleteTask };
