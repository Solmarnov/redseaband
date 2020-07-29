import React from 'react';
import Section from '../Section';
import './style.css';
import logo from '../../assets/images/RED SEA FINAL_new_white.png';

const Cover = () => {
  return (
    <Section className={"cover-wrapper"}>
      <div className="cover-img"></div>
      <div className="cover-logo">
        <img src={logo} alt="Red Sea logo" />
      </div>
    </Section>
  );
}

export default Cover;