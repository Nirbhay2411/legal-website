import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/css/LawyersList.css";

const LawyersList = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/lawyers");
        setLawyers(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        setLoading(false);
      }
    };
    fetchLawyers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="lawyers-list-container">
      <h1>Our Legal Experts</h1>
      <div className="lawyers-grid">
        {lawyers.map((lawyer) => (
          <div key={lawyer._id} className="lawyer-card">
            <div className="lawyer-avatar">
              {lawyer.userId.firstName.charAt(0)}{lawyer.userId.lastName.charAt(0)}
            </div>
            <div className="lawyer-info">
              <h2>
                <Link to={`/lawyer/${lawyer.userId._id}`}>
                  {lawyer.userId.firstName} {lawyer.userId.lastName}
                </Link>
              </h2>
              <p className="specialization">{lawyer.specialization}</p>
              <div className="lawyer-meta">
                <span>⭐ {lawyer.ratings.toFixed(1)}</span>
                <span>💼 {lawyer.experience} years</span>
                <span>💰 ${lawyer.hourlyRate}/hr</span>
              </div>
              <Link 
                to={`/lawyer/${lawyer.userId._id}`} 
                className="view-profile-btn"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyersList;