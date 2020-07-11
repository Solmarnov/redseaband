import React from 'react';
import './style.css';
import logo from './images/RED SEA FINAL_new_white.png';

const Cover = () => {
  return (
    <section className="cover-wrapper">
      <div className="cover-img"></div>
      <div className="cover-logo">
        <img src={logo} />
      </div>
    </section>
  );
}

export default Cover;