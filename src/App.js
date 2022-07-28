import { Route, Routes } from "react-router-dom";
import BlogDetails1 from "./Components/Blogs/BlogDetails/BlogDetails1";
import BlogDetails2 from "./Components/Blogs/BlogDetails/BlogDetails2";
import BlogDetails3 from "./Components/Blogs/BlogDetails/BlogDetails3";

import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Invoice from "./Components/Dashboard/Outlet/Invoice";
import MyProfile from "./Components/Dashboard/Outlet/MyProfile";
import Home from "./Components/Home/Home";
import SignupBanner from "./Components/Home/SignupBanner/SignupBanner";
import Footer from "./Share/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from './Share/Navbar';

function App() {
  return (
    <div className="  bg-white">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blogs></Blogs>} />

        <Route path="dashboard" element={<Dashboard></Dashboard>}>

          <Route path="invoiceId" element={<Invoice></Invoice>} />
          <Route path="myprofile" element={<MyProfile></MyProfile>} />
        </Route>


        {/* mozahid task  */}
        <Route path="/blog/mongoDB" element={<BlogDetails1 />} />
        <Route path="/blog/reactjs" element={<BlogDetails2 />} />
        <Route path="/blog/javaScript" element={<BlogDetails3 />} />
        {/* mozahid task  */}




        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
