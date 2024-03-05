import Navbar from "./Navbar"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import "./App.css"


function App() {
  
  return (
    <>
    <Navbar />
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>

    <div className="edge">
      <header>

      <div>
      <img src="/images/food1.jpeg" alt="" class="center"/>
    </div>

    <div>
      <div className="title">
      <h2>Site Name</h2>
    </div>

    <span className="location">
      8370 N 4th St, Los Angeles, CA 59930, USA
    </span>

    <span className="location">
    Open Hours: 8.00 AM - 8.00 PM
    </span>
    </div>

    

      </header>
    </div>
    


    </>
  )
}

export default App;
