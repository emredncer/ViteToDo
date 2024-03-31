function Todo({ todo, list, todoList }) {

    function handleToggle() {
        list(todoList.map(todo => {
            if (todo.id === todo.id) {
                return { ...todo, completed: true };
            }
            return todo;
        }));
    }

    function handleDelete() {
        let filteredTodo = todoList.filter((todo) => todo.id !== todo.id);
        list(filteredTodo);
    }

    return (
        <li className={todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" onChange={handleToggle} />
                <label>{todo.text}</label>
                <button onClick={handleDelete} className="destroy"></button>
            </div>
        </li>
    );
}

export default Todo;