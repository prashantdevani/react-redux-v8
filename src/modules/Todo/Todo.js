import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, empty } from "./todoSlice";

function Todo() {
  const { todo: todoList, products }  = useSelector((state) => state);
  const productList = products.items
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Todo list mount");
  }, []);

  return (
    <div className="App">
      <h2>Task List</h2>
      {todoList.map((item, i) => {
        return (
          <div key={i}>
            {item.name} {" --- "}
            {item.date}
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch(add({
            name: "test 1",
            date: "05/05/2022"
          }));
        }}
      >
        Add Task
      </button>
      <button
        onClick={() => {
          dispatch(empty());
        }}
      >
       Clear
      </button>
    </div>
  );
}

export default Todo;
