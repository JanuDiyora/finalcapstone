import React from 'react';
import { FaSearch, FaIndustry, FaInfoCircle, FaLifeRing, FaToolbox } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Gokaddal Technologies" />
       
      </div>
      <nav className="nav-links">
        <a href="#find-solutions"><FaSearch /> Find Solutions</a>
        <a href="#sme-solutions"><FaToolbox /> SME Solutions</a>
        <a href="#industries"><FaIndustry /> Industries</a>
        <a href="#knowledge-base"><FaInfoCircle /> Knowledge Base</a>
        <a href="#support"><FaLifeRing /> Support</a>
      </nav>
      <div className="auth-links">
        <a href="#signup">Sign Up</a>
        <a href="#login">Login</a>
      </div>
    </header>
  );
};

export default Header;
