import './App.css';
import { useState } from 'react';

function App() {
  const [Todos, setTodos] = useState([{
    title: "Go to gym",
    description: "5-7PM regularly."
  }, {
    title: "Coding",
    description: "7-11PM regularly."
  }]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function addTodo() {
      setTodos([...Todos, {
        title: title,
        description: description
      }]);
      setTitle('');
      setDescription('');
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}  
      />
      <input
        type="text"
        value={description}
        placeholder="description"
        onChange={(f) => setDescription(f.target.value)}  
      />
      <button onClick={addTodo}>Add A Todo</button>
      {Todos.map((todo, index) => (
        <Todo  key={index} todo={todo} />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.todo.title}</h1>
      <h2>{props.todo.description}</h2>
    </div>
  );
}

export default App;