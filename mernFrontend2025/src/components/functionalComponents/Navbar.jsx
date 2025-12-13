import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    <>    <nav>
          
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/learn-react">Learning React</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>
        
    </>
  )
}
export default Navbar
// import Props from "./Props"
// import Chocolate from "./Chocolate"
// import State from "./State"
// import Home from "./Home"

// function Navbar() {
//   return (
//     <>
//         <nav>
//             <ul>
//                 <Link to=""></>li>Home</li></Link>
//                 <li>About</li>
//                 <li>Learning React</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//         <p>The above content is Navbar</p>
        
//         <div>
//             <Home/>
//             <Props hi="Welcome to Props" grade="12" com="17" img="vite.svg"/>
//             <State/>
//             <Chocolate choc1="Dairy Milk" choc2="Kit Kat" choc3="Milky Bar"/>
//         </div>
//     </>
//   )
// }
// export default Navbar
