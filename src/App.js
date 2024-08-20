import { useEffect, useState } from "react";
import classes from "./style.module.css"
import TodoItem from "./components/todo-item";

// API endpoint : dummyjson.com/docs/todos

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchListOfTodos = async () => {
    try{
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      console.log(result);

      if(result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMessage("");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMessage("");
      }

    } catch(e) {
        console.log(e);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  },[])

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Todo App using Material UI </h1>
      <div>
        {
          todoList && todoList.length > 0 ? 
          todoList.map(todoItem => <TodoItem todo={todoItem}/> ) : null
        }
      </div>
    </div>
  );
}

export default App;
