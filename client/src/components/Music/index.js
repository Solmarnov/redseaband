import React, { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Container, Row } from '../Grid';
import cover from '../../assets/images/BattlescarCover.jpg';
import Iframe from '../Iframe';
import HRule from '../HRule';
import './style.css';

const Music = () => {

  const spotifyIframe = {
    src: "https://open.spotify.com/embed/album/1Y8AhtmqSLi1DvwNPj3SZq",
    scrolling: "no",
    frameBorder: "0",
    allowtransparency: "true"
  };

  const appleMusicIframe = {
    src: "https://embed.music.apple.com/au/album/battlescar-ep/1148468921?app=music",
    sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation",
    allow: "autoplay *; encrypted-media *;"
  };

  // Use state setting Spotify iframe as the default
  const [streamingWidget, setStreamingWidget] = useState(spotifyIframe);
  // Hook to toggle active class for streaming-service-toggler buttons
  const [active, setActive] = useState(true);
  // Function for onClick event
  const toggleStreamingService = ({ target }) => {
    const streamingService = target.getAttribute("name");
    if (streamingService === "spotify") {
      setStreamingWidget(spotifyIframe);
      setActive(true);
    } else {
      setStreamingWidget(appleMusicIframe);
      setActive(false);
    }
  }

  return (
    <Section>
      <SectionTitle>MUSIC</SectionTitle>
      <div className="streaming-service-toggler">
        <button className={active ? `active` : ``} name="spotify" onClick={toggleStreamingService}>SPOTIFY</button>
        <button className={!active ? `active` : ``}name="apple-music" onClick={toggleStreamingService}>APPLE MUSIC</button>
      </div>
      <Container>
        <div className="music-streaming">
          <div className="coverart">
            <img src={cover} alt="Battlescar Cover" />
            <Iframe { ...streamingWidget } 
              width="300"
              height="400"
            />
          </div>
        </div>
      </Container>
      <HRule />
    </Section>
  )
}

export default Music;
