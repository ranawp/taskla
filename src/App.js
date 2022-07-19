import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from './Share/Navbar';

function App() {
  return (
 header/rana
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

      </Routes>
      </>



    
  );
}

export default App;
