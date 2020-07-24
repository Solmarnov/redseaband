import React from 'react';
import Section from '../Section';
import './style.css';

const Socials = () => {
  return (
    <Section>
      <div className="socials-wrap">
        <div className="icon-container">
          <div className="icon">
            <a href="https://open.spotify.com/artist/0uVZxGaRhRW3X3z05qrS1O?si=e5KroH5gTJiNBH9cS1DpSg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://www.facebook.com/redseaprog/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://www.youtube.com/channel/UCXLgcIfMePwItL3ciLLTOtg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="http://instagram.com/redsea_prog" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://itunes.apple.com/au/artist/red-sea/1148468925" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-itunes-note"></i>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Socials;