import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const ResultDisplay = ({ roi = 0, initialInvestment, finalValue, duration, industry }) => {
  // Calculate the investment gain
  const investmentGain = finalValue - initialInvestment;
  const profit = investmentGain > 0 ? investmentGain : 0;
  const invested = initialInvestment;

  // Pie chart data
  const data = {
    labels: ['Invested', 'Profit'],
    datasets: [
      {
        data: [invested, profit],
        backgroundColor: ['blue', 'orange'],
        hoverOffset: 4,
      },
    ],
  };

  // Options for customizing the Pie chart
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
  };

  // Calculate Annualized ROI if applicable
  const annualizedROI = duration && finalValue > initialInvestment
    ? ((finalValue / initialInvestment) ** (1 / duration) - 1) * 100
    : null;

  return (
    <div className="result-display">
      <h3>Results for {industry}</h3>
      <p>Your ROI is: {roi}%</p>
      <p>Investment Gain: ${investmentGain.toFixed(2)}</p>

      {annualizedROI && (
        <p>Annualized ROI: {annualizedROI.toFixed(2)}%</p>
      )}

      {/* Pie chart representation */}
      <div className="chart">
        <Pie data={data} options={options} />
      </div>

      <div className="details">
        <p><strong>Initial Investment:</strong> ${initialInvestment}</p>
        <p><strong>Final Value:</strong> ${finalValue}</p>
        <p><strong>Investment Duration:</strong> {duration} years</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
