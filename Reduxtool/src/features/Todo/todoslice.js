import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Hello World"
    }]
}

// function sayHellow(){
//     console.log("Hello world");
    
// }

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        // addTodo :sayHellow
        addTodo : (state ,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            ) 
        },
        updateTodo : (state,action) => {

        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer;