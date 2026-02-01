import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export default function App() {
  const { state, dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        text,
      },
    });

    setText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App with Context and Reducer</h2>

      <input
        type="text"
        placeholder="Enter a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            • {todo.text}{" "}
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}