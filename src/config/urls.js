const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://davidsling-taskmanager.herokuapp.com/api"
    : "http://localhost:9000/api";

export { SERVER_URL };
