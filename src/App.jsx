import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";


function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleChange = (e1) => {
    setText(e1.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setList([...list, addTodo])
    setText("");
  };

  const filteredTodoList = list.filter(todo => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
  });

  function clearCompleted() {
    let filteredTodo = list.filter((todo) => todo.completed !== true);
    setList(filteredTodo);
  }


  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form className="inputForm" onSubmit={handleSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={text}
              onChange={handleChange}
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {filteredTodoList.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                list={setList}
                todoList={list}
              />
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{list.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" onClick={() => setFilter('all')}>
                All
              </a>
            </li>
            <li>
              <a href="#/" onClick={() => setFilter('active')}>
                Active
              </a>
            </li>
            <li>
              <a href="#/" onClick={() => setFilter('completed')}>
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
      </section>
    </>
  );
}

export default App;