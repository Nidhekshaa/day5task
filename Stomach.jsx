import { useContext } from 'react';
import { nameContext } from './App.jsx'
function Stomach(){
  let {name,click}=useContext(nameContext);
  
  const normal={
    backgroundColor:"black",
    textAlign: "center",
    color:"white",
    padding: "0",
    margin:"0",
  }
  const reverse={
    backgroundColor:"white",
    textAlign: "center",
    color:"black",
    padding: "0",
    margin:"0",
  }
  let a=4>3 ? 6>8 ? 10 : 3>8 ? 4>1 ? 20 : 30 : 4>7 ? 40 : 50 : 6>8 ? 60 : 70 ;
  //(condition)?(true):(false)
  console.log(a);
    return(
      // <Useref />
      <div style={click?normal:reverse}>
        <h1>Stomach: {name}</h1>
        
      </div>
    )
}
export default Stomach;