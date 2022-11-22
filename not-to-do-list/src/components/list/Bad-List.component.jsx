const BadList = ({
  entryList1,
  id,
  handleOnSwitch,
  handleOnCheck,
  handleOnSelectAll,
  allBadSelected,
}) => {
  const totalhrs = entryList1.reduce((acc, item) => acc + item.hr, 0);
  return (
    <div className="col text-center">
      <h2>Bad List</h2>
      <hr />
      {entryList1.length > 1 && (
        <div className="">
          {" "}
          <input
            class="form-check-input"
            type="checkbox"
            value="bad"
            id="flexCheckDefault"
            onChange={handleOnSelectAll}
            checked={allBadSelected}
          />
        </div>
      )}

      <table className="table table-striped">
        <tbody id="bad-list">
          {entryList1.map((item, i) => {
            return (
              <tr key={item._id}>
                <th scope="row">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={item._id}
                    id="flexCheckDefault"
                    onChange={handleOnCheck}
                    checked={id.includes(item._id)}
                  />
                </th>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td>
                  {/* <button
                    className="btn btn-danger"
                    onClick={() => {
                      console.log("clicked");
                      return item._id;
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i> Delete
                  </button>{" "} */}
                  <button
                    onClick={() => handleOnSwitch(item._id, "entry")}
                    className="btn btn-success"
                  >
                    <i className="fa-sharp fa-solid fa-danger fa-left-long"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="row">
        <div className="col">
          The Total Time could have saved = {totalhrs} hrs
        </div>
      </div>
    </div>
  );
};

export default BadList;
