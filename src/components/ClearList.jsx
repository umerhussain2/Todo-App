import { useTodo } from "../context/Context";
import { MdDelete } from "react-icons/md";

const ClearList = () => {
  const x = useTodo();

  const handleClearAll = () => {
    x.clearList();
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-end align-items-center mt-3 pt-2 border-top">
            <button className="btn-clear gap-2" onClick={handleClearAll}>
              Clear List
              <i title="clear list">
                <MdDelete className="fs-5 mb-1" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClearList;
