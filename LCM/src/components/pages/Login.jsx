import "../../assets/css/Login.css";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/users/login", data);
      
      if (res.status === 200 && res.data.message === "Login success") {
        alert("Login Success ✅");
        localStorage.setItem("token", res.data.token); // ✅ Save the JWT token

        const role = res.data.data.role;
        // ✅ Save the JWT token

        const token = res.data.token;
        if (!token) {
          alert("Token not received from server");
          return;
        }
        // localStorage.setItem("email", res.data.data.email || "");

        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", role);
        localStorage.setItem("firstName", res.data.data.firstName || "");
        localStorage.setItem("lastName", res.data.data.lastName || "");
        localStorage.setItem("email", res.data.data.email || "");
        reset();
    
        // 🚀 Navigate based on role
        if (role === "lawyer") {
          navigate("/lawyer-dashboard");
        } else {
          navigate("/home");
        }
      } else {
        alert("Login Failed ❌");
      }
    } catch (error) {
      alert("Invalid Credentials ❌");
    }
  };
  
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section */}
        <div className="left-section">
          <h1>Welcome to website</h1>
        </div>

        {/* Right Section */}
        <div className="login-box">
          <h2 className="login-title">USER LOGIN</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <span className="error">{errors.email?.message}</span>

            <div className="input-group">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
            </div>
            <span className="error">{errors.password?.message}</span>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgotPassword">Forgot password?</a>
            </div>

            <button type="submit" className="login-button" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
