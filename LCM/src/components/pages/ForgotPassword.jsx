import "../../assets/css/password-pages.css";
import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/image/adalet-logo-png_seeklogo-341382.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/users/forgot-password", { email });
      window.alert(res.data.message || "Reset link sent to your email!");
      setMessage({ text: res.data.message, type: "success" });
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || "Error sending reset email", 
        type: "error" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="password-page" style={{ 
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    }}>
      <div className="password-container">
        <div className="password-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        
        <div className="password-header">
          <h2>Forgot Your Password?</h2>
          <p>Enter your email and we'll send you a link to reset your password</p>
        </div>

        <form className="password-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="password-input"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button 
            type="submit" 
            className="password-button"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message.text && (
          <div className={`password-message ${message.type}-message`}>
            {message.text}
          </div>
        )}

        <div className="password-footer">
          <p>Remember your password? <a href="/login">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;