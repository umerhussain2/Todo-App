import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useTodo } from "../context/Context";

const List = () => {
  const x = useTodo();

  const sendEditTodo = (id) => {
    x.editTodo(id, false);
  };

  const sendRemoveTodo = (id) => {
    x.removeTodo(id);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="list-wrapper">
          <ul className="mb-0 p-0">
            {x.list.map((i, index) => (
              <li
                key={i.id}
                className="d-flex justify-content-between align-items-center list-item"
              >
                <div className="d-flex justify-content-start align-items-center gap-3">
                  <p className="mb-0">{`${index + 1}`}</p>
                  {i.todo}
                </div>
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="btn-edit"
                    onClick={() => sendEditTodo(i.id)}
                  >
                    <i title="edit" className="mb-1">
                      <AiOutlineEdit className="fs-5" />
                    </i>
                  </button>
                  <button
                    className="btn-remove"
                    onClick={() => sendRemoveTodo(i.id)}
                  >
                    <i title="remove" className="mb-1">
                      <AiOutlineDelete className="fs-5" />
                    </i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
