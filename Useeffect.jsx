import { useState , useEffect} from 'react'
function Useeffect(){
    let[Count,setCount]=useState(0);
    useEffect(()=>{
      console.log("value updated")
      //code cleanup
      return(()=>{
        console.log("Code cleanup");
      })
    },[Count])
    return(
      <div>
        <h1>Count: {Count}</h1>
        <button onClick={()=>setCount(Count+1)}>Increment</button>
        <button onClick={()=>setCount(Count-1)}>Decrement</button>
      </div>
    )
  }
  export default Useeffect;