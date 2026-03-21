import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
          todos:[
            {
                id:1,
                todo:"Todo msg",
                completed:false
            }
          ],
          addTodo:(todo)=>{},
          updateTodo:(todo,id)=>{},
          deleteTodo:(id)=>{},
          toggleComplete:(id)=>{}
    }
)

export function useTodo(){
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider