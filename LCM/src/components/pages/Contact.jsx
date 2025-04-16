import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/Contact.css"; // Ensure correct path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/contacts", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting form. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="contact-page-container">
      <div className="contact-content-wrapper">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">We'd love to hear from you!</p>

        <div className="contact-form-container">
          <div className="contact-form-section">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h3>Our Contact Details</h3>
            <div className="contact-info-item">
              <strong>Address:</strong> 123 Legal Street, Law City
            </div>
            <div className="contact-info-item">
              <strong>Email:</strong> support@legalmarketplace.com
            </div>
            <div className="contact-info-item">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="contact-info-item">
              <strong>Hours:</strong> Mon-Fri, 9AM-6PM
            </div>
          </div>
        </div>

        <div className="map-embed-container">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018072!2d-73.98784468459384!3d40.74844047932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623861257894!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;