import "../../assets/css/LawyerDashboard.css";
import React, { useEffect, useState } from "react";
import axios from "../../../../../Project LCM/src/utils/axiosInstance";

const LawyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    bio: "",
    specialization: "",
    experience: "",
    hourlyRate: "",
    languages: [],
    education: [{ degree: "", university: "", year: "" }],
    availableDays: [],
    availableHours: { start: "", end: "" },
    isPublished: false,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/lawyerprofile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        if (res.data.data) {
          setProfile({
            ...res.data.data,
            languages: res.data.data.languages || [],
            education:
              res.data.data.education || [
                { degree: "", university: "", year: "" },
              ],
            availableDays: res.data.data.availableDays || [],
            availableHours:
              res.data.data.availableHours || { start: "", end: "" },
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...profile.education];
    newEducation[index][name] = value;
    setProfile((prev) => ({ ...prev, education: newEducation }));
  };

  const addEducationField = () => {
    setProfile((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", university: "", year: "" }],
    }));
  };

  const saveProfile = async () => {
    try {
      await axios.post('http://localhost:3000/lawyerprofile', profile, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      alert('Profile saved successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    }
  };
  const togglePublish = async () => {
    try {
      const endpoint = profile.isPublished ? 
        'http://localhost:3000/lawyerprofile/unpublish' : 
        'http://localhost:3000/lawyerprofile/publish';
      
      await axios.put(endpoint, {}, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      
      setProfile(prev => ({ ...prev, isPublished: !prev.isPublished }));
      alert(`Profile ${profile.isPublished ? 'unpublished' : 'published'} successfully!`);
    } catch (error) {
      console.error('Error toggling publish status:', error);
      alert(`Failed to ${profile.isPublished ? 'unpublish' : 'publish'} profile. Please try again.`);
    }
  };
  return (
    <div className="lawyer-dashboard-wrapper">
      <div className="lawyer-dashboard">
        <div className="sidebar">
          <h2>Lawyer Dashboard</h2>
          <ul>
            <li>
              <button onClick={() => setActiveTab("profile")}>Profile</button>
            </li>
            <li>
              <button onClick={() => setActiveTab("queries")}>
                Client Queries
              </button>
            </li>
          </ul>
        </div>

        <div className="dashboard-content">
          {activeTab === "profile" && (
            <div className="dashboard-section">
              <h3>Edit Profile</h3>

              <div>
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleProfileChange}
                />
              </div>

              <div>
                <label>Specialization:</label>
                <input
                  type="text"
                  name="specialization"
                  value={profile.specialization}
                  onChange={handleProfileChange}
                />
              </div>

              <div>
                <label>Experience (years):</label>
                <input
                  type="number"
                  name="experience"
                  value={profile.experience}
                  onChange={handleProfileChange}
                />
              </div>

              <div>
                <label>Hourly Rate (₹):</label>
                <input
                  type="number"
                  name="hourlyRate"
                  value={profile.hourlyRate}
                  onChange={handleProfileChange}
                />
              </div>

              <div>
                <label>Education:</label>
                {profile.education.map((edu, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      name="degree"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                    <input
                      type="text"
                      name="university"
                      placeholder="University"
                      value={edu.university}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                    <input
                      type="text"
                      name="year"
                      placeholder="Year"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  
                ))}
                <button onClick={addEducationField} className="action-btn">
                  + Add Education
                </button>
              </div>
              <div>
  <label>Available Days:</label>
  <div className="day-checkboxes">
    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
      <label key={day}>
        <input
          type="checkbox"
          checked={profile.availableDays.includes(day)}
          onChange={() => {
            const updated = profile.availableDays.includes(day)
              ? profile.availableDays.filter((d) => d !== day)
              : [...profile.availableDays, day];
            setProfile((p) => ({ ...p, availableDays: updated }));
          }}
        />
        {day}
      </label>
    ))}
  </div>
</div>

{/* ✅ Available Hours */}
<div>
  <label>Available Hours:</label>
  <div style={{ display: "flex", gap: "10px" }}>
    <input
      type="time"
      value={profile.availableHours.start}
      onChange={(e) =>
        setProfile((p) => ({
          ...p,
          availableHours: { ...p.availableHours, start: e.target.value },
        }))
      }
    />
    <span>to</span>
    <input
      type="time"
      value={profile.availableHours.end}
      onChange={(e) =>
        setProfile((p) => ({
          ...p,
          availableHours: { ...p.availableHours, end: e.target.value },
        }))
      }
    />
  </div>
</div>

{/* ✅ Languages */}
<div>
  <label>Languages (comma separated):</label>
  <input
    type="text"
    value={profile.languages.join(", ")}
    onChange={(e) =>
      setProfile((p) => ({
        ...p,
        languages: e.target.value.split(",").map((lang) => lang.trim()),
      }))
    }
  />
</div>

              <div className="actions">
                <button onClick={saveProfile} className="action-btn">
                  Save Profile
                </button>
                <button
                  onClick={togglePublish}
                  className={`action-btn ${
                    profile.isPublished ? "unpublish" : "publish"
                  }`}
                >
                  {profile.isPublished ? "Unpublish Profile" : "Publish Profile"}
                </button>
              </div>
            </div>
          )}

          {activeTab === "queries" && (
            <div className="dashboard-section">
              <h3>Client Queries</h3>
              <p>(Coming Soon...)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;
