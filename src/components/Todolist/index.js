import React, { useState } from 'react';

const Todolist = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    { title: 'Example Todo 1' },
    { title: 'Example Todo 2' },
    { title: 'Example Todo 3' },
  ]);

  return (
    <ul className="list-group">
      {todos.map((todo, key) => (
        <li key={todo.title + key} className="list-group-item">{todo.title}</li>
      ))}
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="new todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setTodos([
                ...todos,
                { title: value },
              ]);
              setValue('');
            }}
          >
            Add todo
          </button>
        </div>
      </div>
    </ul>
  );
}

export default Todolist;
