import React from "react";

const Page = () => {
  const pageStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "40px",
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const headingStyle = {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#2e0071"
  };

  const paragraphStyle = {
    fontSize: "18px",
    margin: "10px 0",
    color: "#333"
  };

  const strongStyle = {
    color: "#ff6600"
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Welcome to My Page</h2>
      <p style={paragraphStyle}>
        This is a sample paragraph with a <strong style={strongStyle}>highlighted text</strong>.
      </p>
      <p style={paragraphStyle}>
        Another paragraph example to show the styling in JSX.
      </p>
    </div>
  );
};

export default Page;
