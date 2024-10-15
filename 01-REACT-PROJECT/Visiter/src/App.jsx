 import React  from "react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
 
  const App =()=>{
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <div className="container">
     <Programs></Programs>
     </div>
    
    </div>
  )
}
export default App;
