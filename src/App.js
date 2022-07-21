import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from './Share/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

      </Routes>


    </div>
  );
}

export default App;
