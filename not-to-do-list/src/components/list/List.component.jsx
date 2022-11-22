import BadList from "./Bad-List.component";
import TaskList from "./Task-List.component";

const List = ({
  tasks,
  handleOnSwitch,
  handleOnCheck,
  id,
  handleOnSelectAll,
  allEntrySelected,
  allBadSelected,
}) => {
  const entryList = tasks.filter((item) => item.type === "entry");

  const entryList1 = tasks.filter((item) => item.type === "bad");

  return (
    <div className="row mt-5">
      <TaskList
        entryList={entryList}
        // handleOnDelete={handleOnDelete}
        handleOnSwitch={handleOnSwitch}
        handleOnCheck={handleOnCheck}
        handleOnSelectAll={handleOnSelectAll}
        id={id}
        allEntrySelected={allEntrySelected}
      />

      <BadList
        entryList1={entryList1}
        // handleOnDelete={handleOnDelete}
        handleOnSwitch={handleOnSwitch}
        handleOnCheck={handleOnCheck}
        id={id}
        handleOnSelectAll={handleOnSelectAll}
        allBadSelected={allBadSelected}
      />
    </div>
  );
};

export default List;
