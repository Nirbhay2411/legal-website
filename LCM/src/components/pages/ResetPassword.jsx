import "../../assets/css/password-pages.css";
import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/image/adalet-logo-png_seeklogo-341382.png";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage({ text: "Passwords don't match", type: "error" });
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/users/reset-password/${token}`,
        
        { newPassword }
      );
      window.alert(res.data.message || "Password reset successful!");

      setMessage({ text: res.data.message, type: "success" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || "Reset link is invalid or expired", 
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
          <h2>Reset Your Password</h2>
          <p>Create a new password for your account</p>
        </div>

        <form className="password-form" onSubmit={handleSubmit}>
          <input
            type="password"
            className="password-input"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength="6"
          />
          
          <input
            type="password"
            className="password-input"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
          />
          
          <button 
            type="submit" 
            className="password-button"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;