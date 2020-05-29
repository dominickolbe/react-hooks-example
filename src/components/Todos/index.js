import React, { useState } from "react";

const uniqueID = () => Math.random().toString(36).substr(2, 9);

const List = ({ todos, onRemoveTodo }) => (
  <ul className="list-group">
    {todos.map((todo) => (
      <li key={todo.id} className="list-group-item">
        <div className="row">
          <div className="col-8">{todo.title}</div>
          <div className="col-4 text-right">
            <button
              className="btn btn-sm btn-success"
              type="button"
              onClick={() => onRemoveTodo(todo)}
            >
              Done
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

const AddNew = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => {
            onAddTodo({
              id: uniqueID(),
              title: value,
            });
            setValue("");
          }}
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

const Todos = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <List
        todos={todoList}
        onRemoveTodo={(todo) =>
          setTodoList(todoList.filter((item) => item.id !== todo.id))
        }
      />
      <AddNew onAddTodo={(todo) => setTodoList([...todoList, todo])} />
    </div>
  );
};

export default Todos;
