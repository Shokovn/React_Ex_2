import React from "react";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {" "}
      {todos.map((todo) => (
        <li key={todo.id}>
          <span onClick={() => toggleComplete(todo.id)}> {todo.text} </span>{" "}
          <button onClick={() => deleteTodo(todo.id)}> Xóa </button>{" "}
        </li>
      ))}{" "}
    </ul>
  );
}

export default TodoList;
