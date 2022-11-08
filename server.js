import express from "express";
import morgan from "morgan";

const app = express();
//middleware
app.use(morgan("dev"));

//api endpoints

("");
//workflow:CRUD
//Create:receive new task and store in the database
app.post("/api/v1/task", (req, res) => {
  res.json({ message: "tod get method" });
});
//READ: read data from DATABASE and return to the client
app.get("/api/v1/task", (req, res) => {
  res.json({ message: "tod get method" });
});
//update: update some information of existing data in the database and respond client accordingly

app.put("/api/v1/task", (req, res) => {
  res.json({ message: "tod get method" });
});
//D(delete): delete data(s) from database and response clent accordingly
app.delete("/api/v1/task", (req, res) => {
  res.json({ message: "tod get method" });
});

console.log(app);

const PORT = 8000;

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
