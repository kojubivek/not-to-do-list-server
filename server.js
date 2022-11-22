import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = 8000;
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//db Connection
import mongoConnect from "./src/config/dbCongif.js";
mongoConnect();
//api endpoints
import taskrouter from "./src/routers/taskrouter.js";
app.use("/api/v1/task", taskrouter);

app.use((error, req, res, next) => {
  res.status(404).json({
    status: "error",
    message: error.messgage,
  });
});
// console.log(app);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
