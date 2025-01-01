//import { useState , useEffect, createContext} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// //import Slam from './Slam.jsx';
// //import State from './State.jsx';
// import './App.css'
// import logo from './assets/logo.jpg';
// import Home from './Home';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// function App() {

//   return (
//     <Router>
//       <nav>
//         <img src={logo} alt="KEC" width="40px" height="40"/>
//         <ul>
//         <li><Link to="/">KEC</Link></li>
//         </ul>
//         <ol>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/Aboutus">About Us</Link></li>
//           <li><Link to="/Contactus">Contact Us</Link></li>
//         </ol>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Aboutus" element={<Aboutus />} />
//         <Route path="/Contactus" element={<Contactus />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

// import Useref from './Useref.jsx'

//Props Drill
import Hen from './Hen'
import { createContext, useState } from 'react';

export let nameContext = createContext();
 function App(){
  let [click,setClick]=useState("false")
  return(
    // <Useref />
    <nameContext.Provider value={{water: "water",click}}>
    <Hen />
    <button onClick={()=>setClick(!click)}>click here</button>
    
    </nameContext.Provider>
  )
 }
 export default App;