import React from 'react';
import Calculator from './components/Calculator';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import Header from './components/Header'; // Import the Header component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Add Header at the top */}
      <header>
        <h1>Return on Investment (ROI) Calculator</h1>
      </header>
      <main className="calculator-container">
        <Calculator />
        <ResultDisplay />
      </main>
      <section className="roi-info">
        <h2 className='header2'>What is ROI?</h2>
        <p className="data">ROI (Return on Investment) is a financial metric used to evaluate the profitability of an investment.It measures the return generated realtive to the investment's cost.ROI is typically expressed as a percentage and is calculated using the formula :</p>
        <p><center>ROI = (FinalValue - InitialInvestment ) / InitialInvestment * 100</center></p>
       <p>Example :</p>
        <p className="data">If you invest $1000 in a project and it grows to $1500 , the ROI would be : </p>
        <p><center>ROI = (1500 - 1000 ) / 1000 * 100  =  50%</center></p>
        <p className="data">This means you have gained a 50% return on your initialInvestment </p>
       
      </section>
      <Footer />
    </div>
  );
}

export default App;
