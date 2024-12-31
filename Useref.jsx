import {useState ,useRef} from 'react'
function Useref(){
    let[Count,setCount]=useState(0);
    let countref=useRef(0);
    let increment=()=>{
        setCount(Count+1);
        countref.current++;
        console.log("State: ",Count);
        console.log("Ref: ",countref.current);
    }
    let decrement=()=>{
        setCount(Count-1);
        countref.current--;
        console.log("State: ",Count);
        console.log("Ref: ",countref.current);
    }
    return(
      <div>
        <h1>Count: {Count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  }
  export default Useref;