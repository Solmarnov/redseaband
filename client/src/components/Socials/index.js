import React from 'react';
import './style.css';

const Socials = () => {
  return (
    <div className="socials-wrap">
      <div className="icon-container">
        <div className="icon">
          <a href="https://open.spotify.com/artist/0uVZxGaRhRW3X3z05qrS1O?si=e5KroH5gTJiNBH9cS1DpSg" target="_blank">
            <i class="fab fa-spotify fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon">
          <a href="https://www.facebook.com/redseaprog/" target="_blank">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon">
          <a href="https://www.youtube.com/channel/UCXLgcIfMePwItL3ciLLTOtg" target="_blank">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon">
          <a href="http://instagram.com/redsea_prog" target="_blank">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon">
          <a href="https://itunes.apple.com/au/artist/red-sea/1148468925" target="_blank">
            <i class="fab fa-itunes-note fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials;