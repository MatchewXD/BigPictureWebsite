import React from "react";


const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <header>
        <h1>Big Picture</h1>
        <p>This is a simple home page example.</p>
        <img
          src="logo192.png"
          alt="React Logo"
          style={{ height: "150px", animation: "spin 20s linear infinite" }}
        />
      </header>
    </div>
  );
};

export default Home;