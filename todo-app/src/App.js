import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1> Ứng dụng Quản Lý Công Việc </h1> <TodoForm addTodo={handleAddTask} />{" "}
      <TodoList
        todos={tasks}
        toggleComplete={handleToggleTask}
        deleteTodo={handleDeleteTask}
      />{" "}
    </div>
  );
}

export default App;
