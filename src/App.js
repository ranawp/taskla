import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from './Share/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

      </Routes>


    </div>
  );
}

export default App;
