import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './Feature/Counter/CounterSlice';
import { useState } from 'react';

function App() {
  const [amount , setAmount]=useState(0);
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

   function handleIncreMentClick(){
   dispatch(increment());
   }

   function handleDecrementClick(){
    dispatch(decrement());
   }

   function handleResetClick(){
    dispatch(reset());
   }

   function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
   }

  return (
    <>
   <button onClick={handleIncreMentClick}>+</button>
   <p>Count {count}</p>
   <button onClick={handleDecrementClick}>-</button>
   <button onClick={handleResetClick}>Reset</button>
   <br />
   <br />
   <input 
   type="number"
   value={amount}
   placeholder='Enter Amount'
   onChange={(e)=>setAmount(e.target.value)}
   />
    <br />
    <button onClick={handleIncAmountClick}>Inc by amount</button>
   </>
  )
}

export default App
