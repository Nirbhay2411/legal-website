import "../../assets/css/QueryForm.css";
import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/image/adalet-logo-png_seeklogo-341382.png";

 
const UserQueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      if (formData.document) {
        data.append("document", formData.document);
      }

      const res = await axios.post("http://localhost:3000/queries", data);
      alert("✅ Query submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong while submitting your query.");
    }
  };

  return (
    <div className="user-query-form-container">
      <form className="user-query-form" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Replace with your own logo path */}
        <img src={logo} alt="Query Logo" className="logo" />
        <h2>Submit Your Query</h2>

        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Type your query here..."
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="document">Attach a Document (optional)</label>
        <input type="file" id="document" name="document" onChange={handleChange} />

        <button type="submit">Send Query</button>
      </form>
    </div>
  );
};

export default UserQueryForm;
