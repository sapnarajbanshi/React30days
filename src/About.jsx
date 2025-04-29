import { useState } from "react"
import App from "./App"

function About(){
   // const state=useState("sapna")
   //const firstitem=state[0]
   //const seconditem=state[1]
   //var count =0
  // const state=useState(0)
  //const firstitem=state[0]
  //const seconditem=state[1]
  const[number,setNumber]=useState(100)
  // const increaseCount=()=>{
  // seconditem(firstitem + 1)
  const decreaseCount=()=>{
    setNumber(number - 1)
    
   }
    return (
    <div>
        <h1>{number}</h1>
        <button onClick={decreaseCount}>-</button>
    </div>
    )
}
export default About