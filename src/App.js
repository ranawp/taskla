import { Route, Routes } from "react-router-dom";
import BlogDetails1 from "./Components/Blogs/BlogDetails/BlogDetails1";
import BlogDetails2 from "./Components/Blogs/BlogDetails/BlogDetails2";
import BlogDetails3 from "./Components/Blogs/BlogDetails/BlogDetails3";

import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import SignupBanner from "./Components/Home/SignupBanner/SignupBanner";
import Footer from "./Share/Footer";
import Navbar from './Share/Navbar';

function App() {
  return (
    <div className="  bg-white">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/blog" element={<Blogs></Blogs>} />


       {/* mozahid task  */}
       <Route path="/blog/mongoDB" element={<BlogDetails1/>}/>
       <Route path="/blog/reactjs" element={<BlogDetails2/>}/>
       <Route path="/blog/javaScript" element={<BlogDetails3/>}/>
       {/* mozahid task  */}




      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
