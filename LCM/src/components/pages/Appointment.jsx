import "../../assets/css/Appointment.css";
import React, { useState } from "react";
import UserNavbar from "../../components/layouts/UserNavbar";
import axios from "axios";

/* eslint-disable no-unused-vars */

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/appointments", formData);
      
      // Show success popup instead of a message inside the form
      window.alert("Appointment booked successfully! ✅");
      
      // Clear form after success
      setFormData({ name: "", email: "", date: "" });

    } catch (error) {
      window.alert("Failed to book appointment. ❌ Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h2>Book an Appointment</h2>
        <p>Schedule a consultation with an expert lawyer.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Select Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <button type="submit" className="book-appointment-btn">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
