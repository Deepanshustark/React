import { useEffect, useState } from "react";
// import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
import { TodoContextProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos((prev=>
      [...prev,{
        id:Date.now(),
        ...todo
      }]
    ))
  }

  function updateTodo(id,todo){
    setTodos((prev)=>prev.map((prevTodo)=>{
      if(prevTodo.id===id){
        return todo
      }else{
        return prevTodo
      }
    }))
  }
  function deleteTodo(id){
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id)
    )
  }

  function toggleComplete(id){
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <>
      <TodoContextProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <ToDoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo)=>(
                <div key={todo.id}
                className="w-full">
                    <ToDoItems todo={todo}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
