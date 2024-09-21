import { buy_book } from "./BookTypes"

const initialState={
  NumberofBooks:20
}

const BookReducer=(state=initialState,action)=>{
  switch(action.type){
case buy_book:return{
  ...state,NumberofBooks:state.initialState-1
}
  }
}