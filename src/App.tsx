import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Courses from './Components/Courses/Courses';
import Payment from './Components/Courses/Payment';
import MyTask from './Components/Dashboard/Outlet/MyTasks/MyTask';
import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
import MyClass from './Components/MyClass/MyClass';
import Register from './Components/Register/Register';
import ViewProfile from './Components/ViewProfile/ViewProfile';
import StudentAnalytic from './Components/StudentAnalytic/StudentAnalytic';
import Footer from './Share/Footer';
import Navbar from './Share/Navbar';
import ContactUs from './Components/Home/ContactUs';
import AddReview from './Components/Review/AddReview';
import Announcement from './Components/Announcement/Announcement';
import SubmittedTask from './Components/Dashboard/Outlet/MyTasks/SubmittedTask';
import BlogDetails from './Components/Blogs/BlogDetails/BlogDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Admin_Dashboard from './Components/Dashboard/Admin_Dashboard/Admin_Dashboard';
import Allusers from './Components/Dashboard/Outlet/Allusers';
import TaskCreate from './Components/Dashboard/Outlet/TaskCreate/TaskCreate';
import TaskEvaluate from './Components/Dashboard/Outlet/MyTasks/TaskEvalute/TaskEvaluate';
import CompletedTaskEvalute from './Components/Dashboard/Outlet/MyTasks/TaskEvalute/CompletedTaskEvalute';
import CreateBlog from './Components/Dashboard/Outlet/CreateBlog/CreateBlog';
import NoticePublish from './Components/Dashboard/NoticePublish/NoticePublish';
import ModuleUpload from './Components/Dashboard/Outlet/TaskCreate/ModuleUpload';
import TaskEdit from './Components/Dashboard/Outlet/TaskCreate/TaskEdit';
import Login from './Components/Login/Login';



export const TimeContext = createContext('default');

interface Time {
  weekday: string
  year: string
  day: string
  month: string
}

const App = () => {


  var options: Time | any = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long' };
  const dateFunction = new Date().toLocaleDateString("en-UK", options);

  // time 
  let time = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  }
  // setInterval(updateTime, 1000);
  const Mydate: string = dateFunction;
  const Mytime: string = cTime;


  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <TimeContext.Provider value={[Mydate, Mytime]}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path="/createBlog/:blogId" element={<BlogDetails />} />
          <Route path="/classroom" element={<MyClass />} />
          <Route path="/mytask" element={<MyTask />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/payment' element={<Payment />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/analytics" element={<StudentAnalytic />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/submittedTask" element={<SubmittedTask />} />
          <Route path="/addReview" element={<AddReview />} />


          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<Admin_Dashboard />} />
            <Route path="allusers" element={<Allusers />} />
            <Route path="createtask" element={<TaskCreate />} />
            <Route path="taskEvaluate" element={<TaskEvaluate />} />
            <Route path="moduleupload" element={<ModuleUpload />} />
            <Route path="editTask" element={<TaskEdit />} />
            {/* <Route path="allblogs" element={<AllBlog />} /> */}
            <Route path="taskEvaluateCompleted" element={<CompletedTaskEvalute />} />
            <Route path="createBlog" element={<CreateBlog />} />
            <Route path="notice" element={<NoticePublish />} />
          </Route>


          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>

        <Footer></Footer>
      </TimeContext.Provider>
    </div>
  );
};

export default App;