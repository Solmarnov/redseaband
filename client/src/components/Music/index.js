import React, { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Container, Row } from '../Grid';
import cover from '../../assets/images/BattlescarCover.jpg';
import Iframe from '../Iframe';
import './style.css';

const Music = () => {

  // const spotifyFollowIframe = {
  //   src: "https://open.spotify.com/follow/1/?uri=spotify:artist:0uVZxGaRhRW3X3z05qrS1O&size=detail&theme=light",
  //   width: "300",
  //   height: "56",
  //   scrolling: "no",
  //   frameBorder: "0",
  //   allowtransparency: "true"
  // }

  const spotifyPlayIframe = {
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
  const [streamingWidget, setStreamingWidget] = useState(spotifyPlayIframe);
  // Hook to toggle active class for streaming-service-toggler buttons
  const [active, setActive] = useState(true);
  // Function for onClick event
  const toggleStreamingService = ({ target }) => {
    const streamingService = target.getAttribute("name");
    if (streamingService === "spotify") {
      setStreamingWidget(spotifyPlayIframe);
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
        <div className="internal-link">
          <ul className="internal-link-ul">
            <li className="internal-link-li">
              <a href="" className="internal-link-a">ALL MUSIC</a>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default Music;

// FACEBOOK IFRAME
/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fredseaprog%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="500" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */