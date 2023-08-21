import { RiPlayListAddFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { useTodo } from "../context/Context";

const AddTodos = () => {
  const x = useTodo();

  const handleOnAdd = () => {
    x.addTodo();
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="gap-3 mb-3 pb-3 border-bottom d-flex justify-content-center align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Todo"
            value={x.text}
            onChange={(e) => x.setText(e.target.value)}
          />

          {x.toggle ? (
            <button onClick={handleOnAdd} className="btn-1">
              <i title="Add Todo">
                <RiPlayListAddFill className="fs-4" />
              </i>
            </button>
          ) : (
            <button onClick={handleOnAdd} className="btn-1">
              <i title="Update Todo">
                <RxUpdate className="fs-4" />
              </i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTodos;
