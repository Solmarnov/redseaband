import React, { useState, useEffect } from 'react';
import spotifyAPI from '../../utils/spotifyAPI';
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

  useEffect(() => {
    getSpotifyMusic()
  }, [])

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

  const getSpotifyMusic = () => {
    spotifyAPI.getToken()
    .then(res => console.log(res))
    // spotifyAPI.getArtist()
    // .then(res => console.log(res))
    .catch(err => console.log(`
      components/Music/index.js getSpotifyMusic encountered error:
      ${err}`))
  }


  // Use state setting Spotify iframe as the default
  const [streamingWidget, setStreamingWidget] = useState(spotifyPlayIframe);
  // Hook to toggle active class for streaming-service-toggler buttons
  const [active, setActive] = useState(true);
  // Function for onClick event
  const toggleStreamingService = ({ target }) => {
    const streamingService = target.getAttribute('name');
    if (streamingService === 'spotify') {
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
      <StreamingToggler 
        active={active}
        toggleStreamingService={toggleStreamingService}
      />
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