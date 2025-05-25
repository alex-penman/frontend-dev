import React, { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff8dc",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <h1 style={{ textAlign: "center", fontSize: "32px", marginBottom: "10px" }}>
          The Little Lemon
        </h1>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Book your table and enjoy fresh Mediterranean flavors with us.
        </p>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center" }}>
              <h2>Thank you!</h2>
              <p>Your booking has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                />
              </div>

              <div>
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                />
              </div>

              <div>
                <label htmlFor="time">Time</label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                />
              </div>

              <div>
                <label htmlFor="guests">Number of Guests</label>
                <input
                  id="guests"
                  type="number"
                  name="guests"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: "#f4a261",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Book Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
