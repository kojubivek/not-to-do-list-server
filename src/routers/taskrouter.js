import express from "express";
import {
  insertTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../models/task/TaskModel.js";
const router = express.Router();

// // fake database
// let fakeTaskTable = [
//   { _id: 1, task: "Watching Tv", hours: 11, type: "entry" },
//   { _id: 2, task: "Watching Tv", hours: 11, type: "bad" },
//   { _id: 3, task: "cooking", hours: 11, type: "good" },
// ];

//workflow:CRUD
//Create:receive new task and store in the database
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(result);
    res.json({ status: "success", message: "new message has been added" });
  } catch (error) {
    res.json({ status: error, message: error.message });
  }
});
//READ: read data from DATABASE and return to the client
router.get("/", async (req, res) => {
  const data = await getTasks();
  res.json({
    status: "success",
    message: "here are the available list",
    data,
  });
  //   res.json({ message: "tod get get" });
});
//update: update some information of existing data in the database and respond client accordingly

router.put("/", async (req, res) => {
  const { _id, type } = req.body;
  console.log({ type });
  const result = await updateTask(_id, { type });
  // updateTask.map((item) => {
  //   if (item._id === _id) {
  //     item.type = type;
  //   }
  //   return item;
  // });
  if (result?._id) {
    res.json({
      status: "success",
      message: "Type was changed",
    });
  } else {
    res.json({ status: "error", message: "_id not found" });
  }
});
//D(delete): delete data(s) from database and response clent accordingly
router.delete("/", async (req, res) => {
  const _ids = req.body;

  const result = await deleteTask(_ids);
  if (result?.deletedCount) {
    res.json({
      status: "success",
      message: "The selected task has been deleted",
    });
  } else {
    res.json({ status: "error", message: "Nothing to delete" });
  }
});

export default router;
