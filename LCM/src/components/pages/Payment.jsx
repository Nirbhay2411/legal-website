import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/Payment.css"; // Ensure correct path

const Payment = () => {
  const [formData, setFormData] = useState({ name: "", cardNumber: "", amount: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/payments", formData);
      alert("Payment successful! ✅");
    } catch (error) {
      alert("Payment failed! ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" placeholder="Enter card number" value={formData.cardNumber} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Amount</label>
          <input type="number" name="amount" placeholder="Enter amount" value={formData.amount} onChange={handleChange} required />
        </div>

        <button type="submit" className="pay-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
