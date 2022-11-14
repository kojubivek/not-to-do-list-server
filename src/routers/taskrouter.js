import express from "express";
const router = express.Router();

// fake database
let fakeTaskTable = [
  { _id: 1, task: "Watching Tv", hours: 11, type: "entry" },
  { _id: 2, task: "Watching Tv", hours: 11, type: "bad" },
  { _id: 3, task: "cooking", hours: 11, type: "good" },
];

//workflow:CRUD
//Create:receive new task and store in the database
router.post("/", (req, res) => {
  fakeTaskTable.push(req.body);
  console.log(fakeTaskTable);
  res.json({ status: "succes", message: "new message has been added" });
});
//READ: read data from DATABASE and return to the client
router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "here are the available list",
    data: fakeTaskTable,
  });
  //   res.json({ message: "tod get get" });
});
//update: update some information of existing data in the database and respond client accordingly

router.put("/", (req, res) => {
  const { _id, type } = req.body;
  fakeTaskTable.map((item) => {
    if (item._id === _id) {
      item.type = type;
    }
    return item;
  });
  res.json({
    status: "success",
    message: "Type was changed",
    data: fakeTaskTable,
  });
});
//D(delete): delete data(s) from database and response clent accordingly
router.delete("/:_id?", (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    res.status(400).json({
      status: "error",
      message: "invalid request, _id is missing",
    });
    return;
  }
  fakeTaskTable = fakeTaskTable.filter((item) => item._id !== +_id);
  res.json({
    status: "success",
    message: "The selected task has been deleted",
  });
});

export default router;
