import "../../assets/css/lawyers.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        console.log("Fetching lawyers...");
        const res = await axios.get("http://localhost:3000/lawyerprofile/published");
        console.log("API Response:", res.data);
        
        if (res.data.success && res.data.data) {
          setLawyers(res.data.data);
        } else {
          setError("Failed to load lawyers: " + (res.data.message || "Unknown error"));
        }
      } catch (error) {
        console.error("API Error:", error);
        setError("Error fetching lawyers: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLawyers();
  }, []);

  if (loading) return <div className="loading">Loading lawyers...</div>;
  if (error) return <div className="error">{error}</div>;
  if (lawyers.length === 0) return <div className="empty">No lawyers found</div>;

  return (
    <div className="lawyers-container">
      <h2>Top Rated Lawyers</h2>
      <div className="lawyers-grid">
        {lawyers.map((lawyer) => (
          <div key={lawyer._id} className="lawyer-card">
            <div className="lawyer-image-container">
              <div className="lawyer-initials">
                {lawyer.userId.firstName.charAt(0)}{lawyer.userId.lastName.charAt(0)}
              </div>
            </div>
            <h3>{lawyer.userId.firstName} {lawyer.userId.lastName}</h3>
            <p className="expertise">{lawyer.specialization}</p>
            <p className="experience">{lawyer.experience} years experience</p>
            <p className="rate">${lawyer.hourlyRate}/hour</p>
            
            <div className="lawyer-card-actions">
              <Link to={`/lawyer/${lawyer._id}`} className="contact-btn">
                View Profile
              </Link>
              <div className="action-buttons">
                <Link 
                  to={`/appointment?lawyerId=${lawyer._id}`} 
                  className="action-btn appointment-btn"
                >
                  Book Appointment
                </Link>
                <Link 
                  to={`/queryform?lawyerId=${lawyer._id}`} 
                  className="action-btn query-btn"
                >
                  Send Query
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lawyers;