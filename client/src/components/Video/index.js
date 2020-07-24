import React, { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Container, Row } from '../Grid';
import theScoreBackdrop from '../../assets/images/TheScoreBackdropSecondary.jpg';
import './style.css';

const Video = () => {
  const [active, setActive] = useState(false);
  const [styleForBody, setStyleForBody] = useState({});

  const handleVideoOverlay = () => {
    if (!active) {
      setStyleForBody({
        position: 'fixed',
        top: `-${window.scrollY}px`
      });
      setActive(true);
    } else {
      setStyleForBody({ ...styleForBody, position: '' });
      setActive(false);
    }
  }

  // Prevents page scroll while video overlay is visible
  const applyBodyStyle = () => {
    const bodyStyle = document.body.style;
    const { position, top } = styleForBody;
    bodyStyle.position = position;
    bodyStyle.top = top;
    
    // Maintains scroll position when video overlay is hidden again
    window.scrollTo(0, parseInt(top || '0') * -1);
  }

  applyBodyStyle();

  return (
    <Section>
      <SectionTitle>VIDEO</SectionTitle>

      <Row>
        <div className="video-wrapper">
          <div className="video-banner">
            <img src={theScoreBackdrop} alt="The Score official lyric video banner" />
          </div>
          <div className="toggle-music-video" onClick={handleVideoOverlay}>
            <h2 className="video-title">THE SCORE (OFFICIAL LYRIC VIDEO)</h2>
          </div>
        </div>
        
        <div className="video-wrapper">
          <div className="video-banner">
            <img src={theScoreBackdrop} alt="The Score official lyric video banner" />
          </div>
          <div className="toggle-music-video" onClick={handleVideoOverlay}>
            <h2 className="video-title">THE SCORE (OFFICIAL LYRIC VIDEO)</h2>
          </div>
        </div>
      </Row>
        
      <div className={`music-video ${active ? "active" : ""}`} onClick={handleVideoOverlay}>
        <iframe title="The Score (official lyric video)" src="https://www.youtube-nocookie.com/embed/5uB3-1XdpKI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="close" onClick={handleVideoOverlay}><div></div></div>
      </div>
    </Section>
  )
}

export default Video;