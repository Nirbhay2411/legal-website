import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/LawyerAppointments.css";

const LawyerAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const lawyerId = localStorage.getItem("id");
        const res = await axios.get(`http://localhost:3000/appointments/lawyer/${lawyerId}`);
        setAppointments(res.data);
      } catch (error) {
        console.error("Failed to fetch appointments", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointments-page">
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, idx) => (
              <tr key={idx}>
                <td>{appt.name}</td>
                <td>{appt.email}</td>
                <td>{new Date(appt.date).toLocaleDateString()}</td>
                <td>{appt.status || "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LawyerAppointments;
