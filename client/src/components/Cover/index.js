import React from 'react';
import Section from '../Section';
import './style.css';
import logo from './images/RED SEA FINAL_new_white.png';

const Cover = () => {
  return (
    <Section className={"cover-wrapper"}>
      <div className="cover-img"></div>
      <div className="cover-logo">
        <img src={logo} />
      </div>
    </Section>
  );
}

export default Cover;