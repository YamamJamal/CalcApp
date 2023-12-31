import Navbar from "./Navbar"
import Calculator from "./pages/Calculator"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/CalcApp" element={<Calculator />} />
          <Route path="/Help" element={<Home />} />
          <Route path="/About" element={<About />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
