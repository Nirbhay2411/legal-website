import "../../assets/css/Signup.css";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/user", data);
      if (res.status === 201) {
        alert("User created successfully");
        navigate("/login");
      } else {
        alert("User not created");
      }
    } catch (error) {
      console.error("Axios error:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "An error occurred while signing up.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left Section - Form */}
        <div className="signup-left">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit(submitHandler)}>
  <div className="input-group">
    <label>FirstName</label>
    <input
      type="text"
      placeholder="Enter your first name"
      {...register("firstName", { required: "First name is required" })}
    />
    <span className="error">{errors.firstName?.message}</span>
  </div>

  <div className="input-group">
    <label>LastName</label>
    <input
      type="text"
      placeholder="Enter your last name"
      {...register("lastName", { required: "Last name is required" })}
    />
    <span className="error">{errors.lastName?.message}</span>
  </div>

  <div className="input-group">
    <label>Age</label>
    <input
      type="number"
      placeholder="Enter your age"
      {...register("age", { required: "Age is required", min: 1 })}
    />
    <span className="error">{errors.age?.message}</span>
  </div>

  <div className="input-group">
    <label>Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      {...register("email", { required: "Email is required" })}
    />
    <span className="error">{errors.email?.message}</span>
  </div>

  <div className="input-group">
    <label>Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      {...register("password", { required: "Password is required" })}
    />
    <span className="error">{errors.password?.message}</span>
  </div>

  <div className="input-group">
    <label>ConfirmPassword</label>
    <input
      type="password"
      placeholder="Confirm your password"
      {...register("confirmpassword", { required: "Confirm password is required" })}
    />
    <span className="error">{errors.confirmpassword?.message}</span>
  </div>

  <div className="input-group">
    <label>Select Role</label>
    <select {...register("role", { required: "Role is required" })}>
      <option value="">-- Select Role --</option>
      <option value="user">User</option>
      <option value="lawyer">Lawyer</option>
    </select>
    <span className="error">{errors.role?.message}</span>
  </div>

            <button type="submit" className="signup-btn">Create Account</button>
          </form>

          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>

        {/* Right Section - Welcome Message */}
        <div className="signup-right">
          <h2>Welcome to Our Website!</h2>
          <p>
            Join us today and enjoy exclusive benefits.  
            Sign up now and start your journey with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
