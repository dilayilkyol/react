import Navbar from "./Navbar"
import Signin from "./pages/Signin"
import Home from "./pages/Home"


import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  
  return (
    <>
    <Navbar />
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </Router>
    </div>

    
    </>
  )
}

export default App;
