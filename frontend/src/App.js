import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div className="app-container">
      <CalculatorForm setResults={setResults} />
      {results !== null && <Results totalUsage={results} />}
    </div>
  );
};

export default App;
