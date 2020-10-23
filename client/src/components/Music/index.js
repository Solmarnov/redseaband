// !!Apply CSS .active to show/hide spotify/appleMusic Iframe

import React, { useState, useEffect } from 'react';
// import spotifyAPI from '../../utils/spotifyAPI';
import { Container } from '../Grid';
import Iframe from '../Iframe';
import InternalLink from '../InternalLink';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import StreamingToggler from '../StreamingToggler';
import cover from '../../assets/images/BattlescarCover.jpg';
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

  // useEffect(() => {
  //   getSpotifyMusic()
  // }, [])

  const spotifyPlayIframe = {
    title: "Battlescar (2016)",
    className: "music",
    src: "https://open.spotify.com/embed/album/1Y8AhtmqSLi1DvwNPj3SZq",
    scrolling: "no",
    frameBorder: "0",
    allowtransparency: "true"
  };

  const appleMusicIframe = {
    title: "Battlescar (2016)",
    className: "music",
    src: "https://embed.music.apple.com/au/album/battlescar-ep/1148468921?app=music",
    sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation",
    allow: "autoplay *; encrypted-media *;"
  };

  // Use state setting Spotify iframe as the default
  // Hook to toggle active class for streaming-service-toggler buttons
  const [active, setActive] = useState(true);
  const [spotify] = useState("spotify");
  const [appleMusic] = useState("apple-music");
  const [isSpotify, setIsSpotify] = useState(true);

  // Function for onClick event
  const toggleStreamingService = ({ target }) => {
    const name = target.getAttribute('name');
    if (name === 'spotify') {
      setIsSpotify(true);
      setActive(true);
    } else {
      setIsSpotify(false);
      setActive(false)
    }
  }

  return (
    <Section>
      <SectionTitle>MUSIC</SectionTitle>
      <div className="spotify-follow">
        <Iframe
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:0uVZxGaRhRW3X3z05qrS1O&size=detail&theme=light"
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          width="210"
          height="56"
        />
      </div>
      <StreamingToggler 
        active={active}
        toggleStreamingService={toggleStreamingService}
      />
      <Container>
        <div className="music-streaming">
          <div className="coverart">
            <img src={cover} alt="Battlescar Cover" />
            <Iframe 
              title="Battlescar (2016)"
              className={`music ${isSpotify ? "active" : ""}`}
              name={spotify}
              src="https://open.spotify.com/embed/album/1Y8AhtmqSLi1DvwNPj3SZq"
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              width="300"
              height="400"
            />
            <Iframe
              title="Battlescar (2016)"
              className={`music ${!isSpotify ? "active" : ""}`}
              name={appleMusic}
              src="https://embed.music.apple.com/au/album/battlescar-ep/1148468921?app=music"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *;"
              width="300"
              height="400"
            />
          </div>
        </div>
        <div className="music-title">
          <h2 className="title">BATTLESCAR (2016)</h2>
        </div>
        <InternalLink href="/music">
          ALL MUSIC
        </InternalLink>
      </Container>
    </Section>
  )
}

export default Music;

// FACEBOOK IFRAME
/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fredseaprog%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="500" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */