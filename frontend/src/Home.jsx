import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* NAVBAR */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>
          <span style={{ fontStyle: "italic" }}>Joblink</span>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Job listings
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Training & Courses
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Plans & Pricing
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Blog
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Type here to Search....."
            style={{ padding: "5px", borderRadius: "5px", border: "none" }}
          />
          <button
            style={{
              backgroundColor: "cyan",
              padding: "5px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Log In
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Left Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "50px",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "20px" }}>
            Future Ready
          </h1>
          <p style={{ fontSize: "24px", marginBottom: "30px" }}>
            Unlock Opportunities
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 25px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              width: "fit-content",
            }}
          >
            Discover
          </button>
        </div>

        {/* Right Image */}
        <div style={{ flex: 1 }}>
          <img
            src="https://static.wixstatic.com/media/11062b_a2e7454be04546fe9ed5344c07c98e40~mv2.jpg"
            alt="Main"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
