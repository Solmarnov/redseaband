import React from 'react';
import './style.css';

const SectionTitle = ({ children }) => {
  return (
    <div className="section-title">
      <h2>{children}</h2>
    </div>);
}

export default SectionTitle;