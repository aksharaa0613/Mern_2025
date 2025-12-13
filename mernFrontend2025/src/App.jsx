import Navbar from "./components/functionalComponents/Navbar";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import LearningReact from "./components/functionalComponents/LearningReact";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/login";


function App() {
  // const h1Style={
  //   backgroundColor:"lightblue",
  //   textAlign:"center",
  //   color:"white"
  // };
const h1Style={
  backgroundColor:"pink",
  color:"blue"
}
  return (
     <div style={{textAlign: 'left', margin: '0', padding: '0'}}>
      <main>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/learn-react" element={<LearningReact/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
        </main>
   {/* <div>
    <h1 style={h1Style}>Welcome to JSX</h1>
    <h2 className="h2">This is a simple React Component</h2>
    <img src="vite.svg" alt="" style={{marginLeft:"100px",width:"500px",height:"500px"}}/>
    </div> */}
    </div>
    // {/* <div>
    //    <h1 style={{backgroundColor:"blue",textAlign:"center",color:"white"}}>Welcome to JSX</h1>
    //    <h2 style={{backgroundColor:"yellow",textAlign:"center"}}>This is a simple React Component!!!🫠</h2>
    //    <ClassComponents/>
    //    <img src="vite.svg" alt="random image" style={{marginLeft:"100px",width:"500px"}}/>
    // </div> */}
    
  )
  
}

export default App
