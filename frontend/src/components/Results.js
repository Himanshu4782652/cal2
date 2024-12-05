import React from "react";
import "./Results.css";

const Results = ({ totalUsage }) => {
  return (
    <div className="results">
      <h3>Total Daily Water Usage</h3>
      <p>{totalUsage} liters</p>
    </div>
  );
};

export default Results;
