import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import HRule from '../HRule';
import { Row } from '../Grid';
import './style.css';

const Socials = () => {
  return (
    <Section>
      <div className="socials-wrap">
        <div className="icon-container">
          <div className="icon">
            <a href="https://open.spotify.com/artist/0uVZxGaRhRW3X3z05qrS1O?si=e5KroH5gTJiNBH9cS1DpSg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://www.facebook.com/redseaprog/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://www.youtube.com/channel/UCXLgcIfMePwItL3ciLLTOtg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="http://instagram.com/redsea_prog" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <a href="https://itunes.apple.com/au/artist/red-sea/1148468925" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-itunes-note fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <SectionTitle>SOCIALS</SectionTitle>
      <Row>
        <div className="widgets">
          <div className="widget">
            <div className="widget-inner">
              <div className="spotify-follow">
                <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:0uVZxGaRhRW3X3z05qrS1O&size=detail&theme=light" width="300" height="56" scrolling="no" frameBorder="0" allowtransparency="true"></iframe>
              </div>
              <div className="spotify-play">
                <iframe src="https://open.spotify.com/embed/album/1Y8AhtmqSLi1DvwNPj3SZq" width="300" height="400" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </div>
          <div className="widget">
            <div className="widget-inner">
              <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="400" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/au/album/battlescar-ep/1148468921?app=music"></iframe>
            </div>
          </div>
          <div className="widget">
            <div className="widget-inner">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fredseaprog%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="500" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        </div>
      </Row>
      <HRule />
    </Section>
  )
}

export default Socials;