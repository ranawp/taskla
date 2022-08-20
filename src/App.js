import { Route, Routes } from "react-router-dom";
import './App.css';
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
import CreateBlog from "./Components/Dashboard/Outlet/CreateBlog/CreateBlog";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import TaskEvaluate from "./Components/Dashboard/Outlet/MyTasks/TaskEvalute/TaskEvaluate";
import StudentAnalytic from "./Components/StudentAnalytic/StudentAnalytic";
import Admin_Dashboard from "./Components/Dashboard/Admin_Dashboard/Admin_Dashboard";
import ContactUs from "./Components/Home/ContactUs";
import BlogDetails from "./Components/Blogs/BlogDetails/BlogDetails";
import AddReview from "./Components/Review/AddReview";
import NoticePublish from "./Components/Dashboard/NoticePublish/NoticePublish";
import { createContext, useState } from "react";


import Payment from "./Components/Courses/Payment";
import Announcement from "./Components/Announcement/Announcement";
import SubmittedTask from "./Components/Dashboard/Outlet/MyTasks/SubmittedTask";
import CompletedTaskEvalute from "./Components/Dashboard/Outlet/MyTasks/TaskEvalute/CompletedTaskEvalute";



export const TimeContext = createContext('default');
function App() {

  // set Current date 
  var options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long' };
  const dateFunction = new Date().toLocaleDateString("en-UK", options);

  // time 
  let time = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  }
  // setInterval(updateTime, 1000);
  const Mydate = dateFunction;
  const Mytime = cTime;
  return (
    <div className="bg-white overflow-x-hidden" >
      <Navbar></Navbar>
      <TimeContext.Provider value={[Mydate, Mytime]}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/blog" element={<Blogs></Blogs>} />
          <Route path="/classroom" element={<MyClass />} />
          <Route path="/mytask" element={<MyTask />} />
          <Route path="/viewprofile" element={<ViewProfile></ViewProfile>} />
          <Route path='/courses' element={<Courses
          ></Courses>} />
          <Route path='/courses/payment' element={<Payment></Payment>} />
          <Route path="/analytics" element={<StudentAnalytic />}></Route>


          {/* dashboard routes */}
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            <Route index element={<Admin_Dashboard></Admin_Dashboard>} />
            <Route path="allusers" element={<Allusers></Allusers>} />
            <Route path="createtask" element={<TaskCreate></TaskCreate>}></Route>
            <Route path="taskEvaluate" element={<TaskEvaluate></TaskEvaluate>}></Route>
            <Route path="taskEvaluateCompleted" element={<CompletedTaskEvalute />}></Route>
            <Route path="createBlog" element={<CreateBlog></CreateBlog>}></Route>



            <Route path="notice" element={<NoticePublish />}></Route>

          </Route>


          {/* mozahid task  */}
          <Route path="/createBlog/:blogId" element={<BlogDetails />} />
          <Route path="/blog/reactjs" element={<BlogDetails2 />} />
          <Route path="/blog/javaScript" element={<BlogDetails3 />} />
          {/* mozahid task  */}
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/addReview" element={<AddReview />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>



          {/* mozahid task  */}
          <Route path="/createBlog/:blogId" element={<BlogDetails />} />
          <Route path="/blog/reactjs" element={<BlogDetails2 />} />
          <Route path="/blog/javaScript" element={<BlogDetails3 />} />
          {/* mozahid task  */}
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/addReview" element={<AddReview />}></Route>
          <Route path="/announcement" element={<Announcement />}></Route>
          <Route path="/submittedTask" element={<SubmittedTask />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>

        <Footer></Footer>

        <ToastContainer />
      </TimeContext.Provider>
    </div >
  );
}

export default App;