import React, { useState } from 'react';
import Iframe from '../Iframe';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Row } from '../Grid';
import primaryVideoBackdrop from '../../assets/images/TheScoreBackdropPrimary.jpg';
import secondaryVideoBackdrop from '../../assets/images/TheScoreBackdropSecondary.jpg';
import './style.css';

const Video = () => {
  const [active, setActive] = useState(false);
  const [isPrimaryVideo, setIsPrimaryVideo] = useState();
  const [styleForBody, setStyleForBody] = useState({});

  const handleVideoOverlay = ({ target }) => {
    if (!active) {
      setStyleForBody({
        position: 'fixed',
        top: `-${window.scrollY}px`
      });
      setActive(true);
      videoToggler(target);
    } else {
      setStyleForBody({ ...styleForBody, position: '' });
      setActive(false);
    }
  }

  // Prevents page scroll while video overlay is visible
  const applyStyleToBody = () => {
    const bodyStyle = document.body.style;
    const { position, top } = styleForBody;
    bodyStyle.position = position;
    bodyStyle.top = top;

    // Maintains scroll position when video overlay is hidden again
    window.scrollTo(0, parseInt(top || '0') * -1);
  }

  const videoToggler = target => {
    const name = target.getAttribute('name');
    if (name === 'primary-video') {
      setIsPrimaryVideo(true);
    } else {
      setIsPrimaryVideo(false);
    }
  }

  applyStyleToBody();

  return (
    <Section>
      <SectionTitle>VIDEO</SectionTitle>

      <Row>
        <div className="video-wrapper">
          <div className="video-banner">
            <img src={primaryVideoBackdrop} alt="The Score official lyric video banner" />
          </div>
          <div className="toggle-music-video" name="primary-video" onClick={handleVideoOverlay}>
            <h2 className="video-title">THE SCORE (OFFICIAL LYRIC VIDEO)</h2>
          </div>
        </div>
        
        <div className="video-wrapper">
          <div className="video-banner">
            <img src={secondaryVideoBackdrop} alt="The Score official lyric video banner" />
          </div>
          <div className="toggle-music-video" name="secondary-video" onClick={handleVideoOverlay}>
            <h2 className="video-title">THE ART OF TRANSCENDING</h2>
          </div>
        </div>
      </Row>
        
      <div 
        className={`music-video ${active && isPrimaryVideo ? "active" : ""}`} 
        onClick={handleVideoOverlay}
      >
        <Iframe 
          title="The Score (official lyric video)" 
          className="video"
          src="https://www.youtube-nocookie.com/embed/5uB3-1XdpKI" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
        <div className="close" onClick={handleVideoOverlay}><div></div></div>
      </div>
      <div 
        className={`music-video ${active && !isPrimaryVideo ? "active" : ""}`} 
        onClick={handleVideoOverlay}
      >
        <Iframe 
          title="The Art of Transcending" 
          className="video" 
          src="https://www.youtube-nocookie.com/embed/g2YT_aXKrII" frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
        <div className="close" onClick={handleVideoOverlay}><div></div></div>
      </div>
    </Section>
  )
}

export default Video;