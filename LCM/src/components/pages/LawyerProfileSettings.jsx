import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/LawyerProfileSettings.css";

const LawyerProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    experience: "",
    bio: ""
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const id = localStorage.getItem("id");
        const res = await axios.get(`http://localhost:3000/lawyers/${id}`);
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const id = localStorage.getItem("id");
      await axios.put(`http://localhost:3000/lawyers/${id}`, profile);
      alert("Profile updated ✅");
      setEditing(false);
    } catch (err) {
      alert("Update failed ❌");
    }
  };

  return (
    <div className="lawyer-profile">
      <h2>My Profile</h2>
      <div className="profile-form">
        <label>Name:</label>
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
          disabled={!editing}
        />

        <label>Email:</label>
        <input
          name="email"
          value={profile.email}
          onChange={handleChange}
          disabled
        />

        <label>Experience:</label>
        <input
          name="experience"
          value={profile.experience}
          onChange={handleChange}
          disabled={!editing}
        />

        <label>Bio:</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          disabled={!editing}
        />

        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default LawyerProfileSettings;
