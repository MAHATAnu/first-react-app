import React, {useState} from "react";


function TodoList(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = ()  => {
        if (inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      );
}


export default TodoList;