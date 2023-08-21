import AddTodos from "./components/AddTodos";
import ClearList from "./components/ClearList";
import List from "./components/List";
import Title from "./components/Title";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-8 col-lg-6">
            <div className="d-flex flex-column main-wrapper">
              <Title />
              <AddTodos />
              <List />
              <ClearList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
