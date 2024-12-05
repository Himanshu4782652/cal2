import React, { useState } from "react";
import axios from "axios";
import "./CalculatorForm.css";

const CalculatorForm = ({ setResults }) => {
  const [inputs, setInputs] = useState({
    shower: { duration: 0, flowRate: 0, frequency: 0 },
    toilet: { waterPerFlush: 0, frequency: 0 },
    dishwasher: { waterPerCycle: 0, frequency: 0 },
    washingMachine: { waterPerCycle: 0, frequency: 0 },
    gardening: { waterPerSession: 0, frequency: 0 },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/calculate", inputs);
    setResults(response.data.totalDailyUsage);
  };

  const handleChange = (e, category, field) => {
    setInputs((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: parseFloat(e.target.value) || 0,
      },
    }));
  };

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
      <h2>Water Usage Calculator</h2>
      {Object.keys(inputs).map((category) => (
        <div key={category} className="form-section">
          <h4>{category.toUpperCase()}</h4>
          {Object.keys(inputs[category]).map((field) => (
            <div key={field} className="form-group">
              <label>
                {field}{" "}
                {category === "shower" && field === "duration" && "(minutes)"}
                {category === "shower" && field === "flowRate" && "(lt/min)"}
                {field === "frequency" && "(times/day)"}
              </label>
              <input
                type="number"
                value={inputs[category][field]}
                onChange={(e) => handleChange(e, category, field)}
              />
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
