import { useState } from "react";

export function Todolist({ initialTodos }) {
    const [todos, setTodos] = useState(initialTodos)
    const [todo, setTodo] = useState('')

    const HandleInputChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() === '') return;

        setTodos([...todos, todo]);
        setTodo('');
      };

      function handleResetButton() {
        setTodos(initialTodos);
      }

      const handleRemove = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

  return (
    <div>
        <h2>My Todo List:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={handleRemove}>Remove</button></li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={HandleInputChange} value={todo}/>
      <button type="submit">Submit</button>
      <button onClick={handleResetButton}>Reset</button>
      </form>
    </div>
  );
}
