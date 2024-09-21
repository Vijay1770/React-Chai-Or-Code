 import {createSlice,nanoid } from "@reduxjs/toolkit";

 const initialState={
  todos:[{id:1,text:"Hello World!"}]
 }

 export const todoSlice=createSlice({
  name:'todo',
  initialState, 
  //Reducer contain properties and Functions...
  reducers:{
    addTodo:(state,action)=>{ //state=currentState...&& action=data which is passed...
      const todo={
        id:nanoid(),//gives unique id...
        text:action.payload
      }
      state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!== action.payload)
    },
  }
 })

 export const {addTodo,removeTodo}=todoSlice.actions

 export default todoSlice.reducer