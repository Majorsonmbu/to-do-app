import { useEffect, useState } from "react";
import classes from "./style.module.css"
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";

// API endpoint : dummyjson.com/docs/todos

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);

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

  const fetchCurrentTodoDetails = async (targetTodoId) => {
    console.log(targetTodoId);
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${targetTodoId}`);
      const details  = await apiResponse.json();
      if(details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
      console.log(details)

    } catch(error) {

    }
  }
 
  useEffect(() => {
    fetchListOfTodos();
  },[])

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Todo App using Material UI </h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ? 
          todoList.map(todoItem => <TodoItem fetchCurrentTodoDetails={fetchCurrentTodoDetails} todo={todoItem}/> ) : null
        }
      </div>
      <TodoDetails 
        openDialog={openDialog} 
        todoDetails={todoDetails} 
        setOpenDialog={setOpenDialog} 
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
