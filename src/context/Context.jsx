import { createContext, useContext, useEffect, useState } from "react";

// TO GET FORM LOCALSTORAGE
const getLocalData = () => {
  const data = localStorage.getItem("list");
  if (data) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [list, setList] = useState(getLocalData());
  const [itemId, setItemId] = useState(null);
  const [toggle, setToggle] = useState(true);

  // ADD TODO
  const addTodo = () => {
    if (!text) {
      return alert("Enter Todo");
    } else if (text && !toggle) {
      setList(
        list.map((elem) => {
          if (elem.id === itemId) {
            return { ...elem, todo: text };
          }
          return elem;
        })
      );
      setToggle(true);
      setText("");
      setItemId(null);
    } else {
      const task = { id: new Date().getTime().toString(), todo: text };
      setList([...list, task]);
      setText("");
    }
  };

  // ADD DATA TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // EDIT OR UPDATE TODO
  const editTodo = (id, tog) => {
    const editTodo = list.find((item) => {
      return item.id === id;
    });
    setToggle(tog);
    setText(editTodo.todo);
    setItemId(id);
  };

  // REMOVE OR DELETE TODO
  const removeTodo = (id) => {
    const updatedList = list.filter((item) => {
      return item.id !== id;
    });
    setList(updatedList);
  };

  // CLEAR LIST
  const clearList = (p) => {
    return setList([]);
  };

  return (
    <TodoContext.Provider
      value={{
        list,
        text,
        toggle,
        setText,
        addTodo,
        editTodo,
        removeTodo,
        clearList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodo };
