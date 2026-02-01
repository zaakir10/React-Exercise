import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.app}>
      <h2 className={styles.title}>Todo App with CSS Modules</h2>

      <div className={styles.inputGroup}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="Enter a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.addBtn} onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li className={styles.todoItem} key={todo.id}>
            {todo.text}
            <button
              className={styles.deleteBtn}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
