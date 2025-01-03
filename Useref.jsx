import {useState ,useRef} from 'react'
// function Useref(){
//     let[Count,setCount]=useState(0);
//     let countref=useRef(0);
//     let increment=()=>{
//         setCount(Count+1);
//         countref.current++;
//         console.log("State: ",Count);
//         console.log("Ref: ",countref.current);
//     }
//     let decrement=()=>{
//         setCount(Count-1);
//         countref.current--;
//         console.log("State: ",Count);
//         console.log("Ref: ",countref.current);
//     }
//     return(
//       <div>
//         <h1>Count: {Count}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     )
//   }
//   export default Useref;
function Useref(){
    // let name=useRef(0);
    // let display = (e) =>{
    //     name.current=e.target.value;
    //     console.log(name.current);
    // }
    // return(
    //     <div>
    //         <input type="text" onChange={display}/>
    //     </div>
    // )
    let image=useRef(0);
    let display =() =>{
        image.current.src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg"
    }
    return(
        <div>
            <button onClick={display}>Click here</button>
            <img ref={image}/>
        </div>
    )
}
export default Useref;