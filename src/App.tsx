import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Courses from './Components/Courses/Courses';
import Payment from './Components/Courses/Payment';
import MyTask from './Components/Dashboard/Outlet/MyTasks/MyTask';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
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


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path="/createBlog/:blogId" element={<BlogDetails />} />
        <Route path="/classroom" element={<MyClass />} />
        <Route path="/mytask" element={<MyTask />} />
        <Route path="/viewprofile" element={<ViewProfile/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/payment' element={<Payment />} />
        <Route path="/contact" element={<ContactUs />}/>

        <Route path="/analytics" element={<StudentAnalytic />} />
        <Route path="/announcement" element={<Announcement />}/>
        <Route path="/submittedTask" element={<SubmittedTask />} />
        <Route path="/addReview" element={<AddReview />} />

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;