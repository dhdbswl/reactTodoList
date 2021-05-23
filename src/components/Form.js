import React  from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    // function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText, completed: false, id: Math.round(Math.random()*1000)
            }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    // return
    return (
        <form>
            <input 
                placeholder="Enter your To Do."
                value={inputText}
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button 
                onClick={submitTodoHandler} 
                className="todo-button" 
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Done</option>
                    <option value="uncompleted">Not Yet</option>
                </select>
            </div>
        </form>
    );
}

export default Form;