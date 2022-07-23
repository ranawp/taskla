import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignupBanner from "./Components/Home/SignupBanner/SignupBanner";
import Footer from "./Share/Footer";
import Navbar from './Share/Navbar';

function App() {
  return (
    <div className="  bg-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

      </Routes>
      
      <Footer></Footer>


    </div>
  );
}

export default App;
