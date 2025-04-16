import "../../assets/css/LawyerProfile.css";
import React, { useEffect, useState } from "react";
import axios from "../../../../../Project LCM/src/utils/axiosInstance";
import { useParams } from "react-router-dom";

const LawyerProfile = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/lawyerprofile/${id}`);
        setLawyer(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lawyer:", error);
        setLoading(false);
      }
    };
    fetchLawyer();
  }, [id]);

  const handleContactClick = () => {
    setShowEmail(!showEmail);
  };

  if (loading) return <div className="loading">Loading profile...</div>;
  if (!lawyer) return <div className="not-found">Lawyer not found</div>;

  return (
    <div className="lawyer-profile-container">
      <div className="profile-header">
        <div className="avatar">
          {lawyer.userId.firstName.charAt(0)}{lawyer.userId.lastName.charAt(0)}
        </div>
        <div className="header-info">
          <h1>{lawyer.userId.firstName} {lawyer.userId.lastName}</h1>
          <p className="specialization">{lawyer.specialization}</p>
          <p className="rate">${lawyer.hourlyRate}/hour</p>
          <button className="contact-btn" onClick={handleContactClick}>
            {showEmail ? "Hide Email" : "Contact Lawyer"}
          </button>
          {showEmail && (
            <div className="lawyer-email">
              <p>Email: {lawyer.userId.email}</p>
              <button 
                className="copy-email-btn"
                onClick={() => {
                  navigator.clipboard.writeText(lawyer.userId.email);
                  alert("Email copied to clipboard!");
                }}
              >
                Copy Email
              </button>


            </div>
          )}
        </div>
      </div>


      <div className="profile-content">
        <div className="about-section">
          <h2>About</h2>
          <p>{lawyer.bio}</p>
        </div>

        <div className="details-section">
          <div className="experience">
            <h3>Experience</h3>
            <p>{lawyer.experience} years</p>
          </div>

          <div className="languages">
            <h3>Languages</h3>
            <ul>
              {lawyer.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>

          <div className="availability">
            <h3>Availability</h3>
            <p>Days: {lawyer.availableDays.join(", ")}</p>
            <p>Hours: {lawyer.availableHours.start} - {lawyer.availableHours.end}</p>
          </div>
        </div>

        <div className="education-section">
          <h2>Education</h2>
          {lawyer.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.university}, {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;