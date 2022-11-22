import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/Form.component";
import List from "./components/list/List.component";
import {
  addTasks,
  deleteTasks,
  fetchTasks,
  updateTask,
} from "./helpers/axiosHelper";

const totalhrsPerWeek = 24 * 7;
const App = () => {
  const [tasks, setTasks] = useState([]); //replace by server database
  const [id, setId] = useState([]);
  const [response, setResponse] = useState({});
  const [allEntrySelected, setAllEntrySelected] = useState(false);
  const [allBadSelected, setAllBadSelected] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetchTasks();
    console.log(res.data.data);
    setTasks(res.data.data);
  };

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    if (!checked) {
      const { type } = tasks.filter((item) => item._id === value)[0];
      console.log(type);
      type === "entry" ? setAllEntrySelected(false) : setAllBadSelected(false);
    }
    if (checked) {
      setId([...id, value]);
    } else {
      const tempArry = id.filter((item) => value !== item);

      setId(tempArry);
    }
  };

  const deleteAll = async () => {
    console.log(id);
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    const { data } = await deleteTasks(id);
    setResponse(data);

    data.status === "success" && getData();
    setId([]);

    // const all = tasks.filter((item) => !id.includes(item._id));
    // setTasks(all);
    // setId([]);
  };
  const handleOnSelectAll = (e) => {
    const { checked, value } = e.target;
    if (value === "entry") {
      checked ? setAllEntrySelected(true) : setAllEntrySelected(false);
    }

    if (value === "bad") {
      checked ? setAllBadSelected(true) : setAllBadSelected(false);
    }
    console.log(value, checked);
    if (checked) {
      const argToGetIds = tasks.filter((item) => {
        return item.type === value;
      });
      const ids = argToGetIds.map((item) => item._id);
      setId([...id, ...ids]);
    } else {
      setId([]);
    }
  };

  const totalhrs = tasks.reduce((acc, item) => acc + item.hr, 0);

  const taskEntry = async (taskObj) => {
    if (totalhrs + taskObj.hr > totalhrsPerWeek) {
      return alert("total hrs exceeded");
    }
    console.log(taskObj);
    // setTasks([...tasks, taskObj]); //instead of adding in the array, add to the server
    const { data } = await addTasks(taskObj);
    if (data.status === "success") {
      getData();
      setResponse(data);
    }
    console.log(data);
  };
  // const handleOnDelete = (_id) => {
  //   if (!window.confirm("Are you sure you want to delete?")) {
  //     return;
  //   }
  //   const filteredArg = tasks.filter((item, index) => item._id !== _id);

  //   setTasks(filteredArg);
  // };
  const handleOnSwitch = async (_id, type) => {
    if (!window.confirm("Are you sure you want to switch?")) {
      return;
    }
    const { data } = await updateTask({ type, _id });
    setResponse(data);
    data.status === "success" && getData();
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {/* <!--top title-->> */}
          <div className="row">
            <div className="col text-center mt-5">
              <h1>Not to Do List</h1>
              <hr />
            </div>

            {response.message && (
              <div
                className={
                  response.status === "success"
                    ? "alert alert-primary"
                    : "alert alert-danger"
                }
              >
                {" "}
                {response.message}{" "}
              </div>
            )}
            <Form taskEntry={taskEntry} />
          </div>

          <List
            tasks={tasks}
            // handleOnDelete={handleOnDelete}
            handleOnSwitch={handleOnSwitch}
            handleOnCheck={handleOnCheck}
            id={id}
            handleOnSelectAll={handleOnSelectAll}
            allEntrySelected={allEntrySelected}
            allBadSelected={allBadSelected}
          />
          {id.length > 0 && (
            <div className="d-grid py-4">
              <button className="btn btn-lg btn-danger" onClick={deleteAll}>
                Delete selected tasks
              </button>
            </div>
          )}

          <div className="row">
            <div className="col">The Total Time allocated = {totalhrs} Hrs</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
