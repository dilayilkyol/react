import Navbar from "./Navbar"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";

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

    </>
  )
}

export default App;
