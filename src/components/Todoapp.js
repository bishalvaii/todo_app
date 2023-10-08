import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/todoSlice";
const Todoapp = React.memo(({ todo }) => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  console.log("Completed", completedTodos);
  const allTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  );
  const dispatch = useDispatch();
  console.log(todos);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Bishal's Todo</h1>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete </button>
          </li>
        ))}
      </ul>
      <h3>Tasks: {allTodos.length}</h3>
      <h4>Completed: {completedTodos.length}</h4>
    </div>
  );
});
export default Todoapp;
