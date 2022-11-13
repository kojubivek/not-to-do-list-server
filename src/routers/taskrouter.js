import express from "express";
const router = express.Router();

//workflow:CRUD
//Create:receive new task and store in the database
router.post("/", (req, res) => {
  res.json({ message: "tod get method" });
});
//READ: read data from DATABASE and return to the client
router.get("/", (req, res) => {
  res.json({ message: "tod get get" });
});
//update: update some information of existing data in the database and respond client accordingly

router.put("/", (req, res) => {
  res.json({ message: "tod get put" });
});
//D(delete): delete data(s) from database and response clent accordingly
router.delete("/", (req, res) => {
  res.json({ message: "tod get delete" });
});

export default router;
