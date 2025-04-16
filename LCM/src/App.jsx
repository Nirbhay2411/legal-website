import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from "./components/pages/About";
import Appointment from "./components/pages/Appointment";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import ForgotPassword from "./components/pages/ForgotPassword";
import Home from "./components/pages/Home";
import LandingPage from "./components/pages/LandingPage";
import LawyerAppointments from "./components/pages/LawyerAppointments";
import LawyerDashboard from "./components/pages/LawyerDashboard";
import LawyerProfile from "./components/pages/LawyerProfile";
import LawyerProfileSettings from "./components/pages/LawyerProfileSettings";
import Lawyers from "./components/pages/lawyers";
import Login from "./components/pages/Login";
import Payment from "./components/pages/Payment";
import PracticeAreaDetail from "./components/pages/PracticeAreaDetail";
import QueryForm from "./components/pages/QueryForm";
import React from "react";
import ResetPassword from "./components/pages/ResetPassword";
import Signup from "./components/pages/Signup";
import UserNavbar from "./components/layouts/UserNavbar";
import { Carousel } from "react-responsive-carousel";
import { Route, Routes, useLocation } from "react-router-dom";

// import ResetPassword from "./components/pages/ResetPassword";

// import ForgotPassword from "./components/pages/ForgotPassword";

// import ProfileDropdown from "./components/pages/ProfileDropdown";

// import LawyersList from "./components/pages/LawyerList";
const App = () => {
  const location = useLocation();
  const isLoggedIn = Boolean(localStorage.getItem("id"));
  const hideUserNavbarRoutes = ["/", "/login", "/signup"];
  const shouldShowUserNavbar = isLoggedIn && !hideUserNavbarRoutes.includes(location.pathname.toLowerCase());

  console.log("isLoggedIn:", isLoggedIn);
  console.log("pathname:", location.pathname);
  console.log("shouldShowUserNavbar:", shouldShowUserNavbar);

  return (
    <>
      {shouldShowUserNavbar && <UserNavbar />} {/* ✅ shows navbar if logged in and not on login/signup */}
      <UserNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/home" element={<Home />} />
        <Route path="/QueryForm" element={<QueryForm />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
        <Route path="/lawyer-dashboard/appointments" element={<LawyerAppointments />} />
        <Route path="/lawyer-dashboard/profile" element={<LawyerProfileSettings />} />
        {/* <Route path="/ProfileDropdown"element ={<ProfileDropdown/>}/> */}
        // Add these routes to your existing App.jsx
        {/* <Route path="/lawyers" element={<LawyersList />} /> */}
        <Route path="/lawyerprofile" element={<LawyerProfile/>}/>
<Route path="/lawyer/:id" element={<LawyerProfile />} />
<Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
// In your Routes section:
<Route path="/forgotPassword" element={<ForgotPassword />} />
<Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
