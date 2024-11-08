import React, { useState } from 'react';
import ResultDisplay from './ResultDisplay'; // Import ResultDisplay component

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [duration, setDuration] = useState('');
  const [roi, setRoi] = useState(null); // State to store ROI

  const handleCalculate = () => {
    const roiValue = ((finalValue - initialInvestment) / initialInvestment) * 100;
    setRoi(roiValue.toFixed(2)); // Set the calculated ROI
  };

  return (
    <div className="calculator">
      <div className="form-group">
        <label>Select industry</label>
        <select>
          <option value="">Your industry</option>
          <option value="real-estate">Real Estate </option>
          <option value="manufacturing">Retail</option>
          <option value="real-estate">Healthcare </option>
          <option value="manufacturing">Manufacturing</option>
         < option value="real-estate">Agriculture </option>
          <option value="manufacturing">Transportation 
          </option>
        </select>
      </div>
      <div className="form-group">
        <label>Select industry</label>
        <select>
          <option value="">Your industry</option>
          <option value="real-estate">Real Estate </option>
          <option value="manufacturing">Retail</option>
          <option value="real-estate">Healthcare </option>
          <option value="manufacturing">Manufacturing</option>
         < option value="real-estate">Agriculture </option>
          <option value="manufacturing">Transportation 
          </option>
        </select>
      </div>
      <div className="form-group">
        <label>Initial Investment</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Final Value</label>
        <input
          type="number"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Duration of Investment</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <select>
          <option value="years">Years</option>
          <option value="months">Months</option>
        </select>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={() => { setInitialInvestment(''); setFinalValue(''); setDuration(''); setRoi(null); }}>Clear</button>

      {/* Pass calculated data to ResultDisplay */}
     
    </div>
  );
};

export default Calculator;
