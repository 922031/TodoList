import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodo);
  };

  const handleAddClick = () => {
    const name = todoNameRef.current.value;
    if (name == "") return;

    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, completed: false }]
    });

    todoNameRef.current.value = null;

  };

  const handleClear = () => {
    const newTodo = todos.filter((todo) => !todo.completed);
    setTodos(newTodo);
  };

  return (
    <div>
      <TodoList todo1={todos} toggleTodo1={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddClick}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクを削除する</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );

};

export default App;