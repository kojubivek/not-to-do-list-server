import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 8000;
//middleware
app.use(morgan("dev"));

//api endpoints
import taskrouter from "./src/routers/taskrouter.js";
app.use("/api/v1/task", taskrouter);

console.log(app);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
