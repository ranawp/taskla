import { Route, Routes } from "react-router-dom";
import './App.css';
import BlogDetails1 from "./Components/Blogs/BlogDetails/BlogDetails1";
import BlogDetails2 from "./Components/Blogs/BlogDetails/BlogDetails2";
import BlogDetails3 from "./Components/Blogs/BlogDetails/BlogDetails3";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Footer from "./Share/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from './Share/Navbar';
import MyClass from "./Components/MyClass/MyClass";
import Allusers from "./Components/Dashboard/Outlet/Allusers";
import ViewProfile from "./Components/ViewProfile/ViewProfile";
import TaskCreate from "./Components/Dashboard/Outlet/TaskCreate/TaskCreate";
import MyTask from "./Components/Dashboard/Outlet/MyTasks/MyTask";
import Courses from "./Components/Courses/Courses";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import TaskEvaluate from "./Components/Dashboard/Outlet/MyTasks/TaskEvalute/TaskEvaluate";
import StudentAnalytic from "./Components/StudentAnalytic/StudentAnalytic";
import Admin_Dashboard from "./Components/Dashboard/Admin_Dashboard/Admin_Dashboard";
import ContactUs from "./Components/Home/ContactUs";
import AddReview from "./Components/Review/AddReview";
import NoticePublish from "./Components/Dashboard/NoticePublish/NoticePublish";

function App() {

  return (
    <div className=" bg-white overflow-x-hidden" >
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="/classroom" element={<MyClass />} />
        <Route path="/mytask" element={<MyTask />} />
        <Route path="/viewprofile" element={<ViewProfile></ViewProfile>} />
        <Route path='/courses' element={<Courses
        ></Courses>} />
        <Route path="/analytics" element={<StudentAnalytic />}></Route>


        {/* dashboard routes */}
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Admin_Dashboard></Admin_Dashboard>} />
          <Route path="allusers" element={<Allusers></Allusers>} />
          <Route path="createtask" element={<TaskCreate></TaskCreate>}></Route>
          <Route path="taskEvaluate" element={<TaskEvaluate></TaskEvaluate>}></Route>
          <Route path="notice" element={<NoticePublish />}></Route>
        </Route>


        {/* mozahid task  */}
        <Route path="/blog/mongoDB" element={<BlogDetails1 />} />
        <Route path="/blog/reactjs" element={<BlogDetails2 />} />
        <Route path="/blog/javaScript" element={<BlogDetails3 />} />
        {/* mozahid task  */}
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/addReview" element={<AddReview />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;