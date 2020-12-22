import React,{ useState } from "react";
import './App.css';

// task component
function Todo({todo,index, completeTodo,removeTodo}){
  return(
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
};


// imput form
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

function App() {
  const [todos,setTodos] = useState([
    {
      text : "Learn react hooks",
      isComplete : false
    },
    {
      text : "complete the project",
      isComplete : false
    },
    {
      text : "go to gym",
      isComplete : false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted===true){
      newTodos[index].isCompleted = false;
    }
    else{
      newTodos[index].isCompleted = true;
    }
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo,index)=>(
            <Todo key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo ={removeTodo}
            />
            
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
