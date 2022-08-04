import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import BlogDetails1 from "./Components/Blogs/BlogDetails/BlogDetails1";
import BlogDetails2 from "./Components/Blogs/BlogDetails/BlogDetails2";
import BlogDetails3 from "./Components/Blogs/BlogDetails/BlogDetails3";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/Dashboard/Outlet/MyProfile";
import Home from "./Components/Home/Home";
import Footer from "./Share/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from './Share/Navbar';
import BlogDetails4 from "./Components/Blogs/BlogDetails/BlogDetails4";
import MyClass from "./Components/MyClass/MyClass";
import Allusers from "./Components/Dashboard/Outlet/Allusers";
import ViewProfile from "./Components/ViewProfile/ViewProfile";
import TaskCreate from "./Components/Dashboard/Outlet/TaskCreate/TaskCreate";
import MyTask from "./Components/Dashboard/Outlet/MyTasks/MyTask";
import TaskEvaluate from "./Components/Dashboard/Outlet/MyTasks/TaskEvalute/TaskEvaluate";



function App() {
  return (
    <div className=" bg-white" >
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="/classroom" element={<MyClass />} />
        <Route path="/viewprofile" element={<ViewProfile></ViewProfile>} />



        {/* nested route for dashboard  */}
        <Route path="dashboard" element={<Dashboard></Dashboard>}>

          <Route index element={<Allusers></Allusers>} />
          <Route path="myprofile" element={<MyProfile></MyProfile>} />
          <Route path="createtask" element={<TaskCreate></TaskCreate>}></Route>
          <Route path="mytask" element={<MyTask></MyTask>}></Route>
          <Route path="taskEvaluate" element={<TaskEvaluate></TaskEvaluate>}></Route>
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


    </div >
  );
}

export default App;
