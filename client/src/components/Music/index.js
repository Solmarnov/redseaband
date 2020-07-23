import React, { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import { Row } from '../Grid';
// import Iframe from '../Iframe';
import './style.css';

const Music = () => {

  const [streamingWidgets, setWidgets] = useState({
    spotify: {
      src: "https://open.spotify.com/embed/album/1Y8AhtmqSLi1DvwNPj3SZq",
      width: "300",
      height: "380",
      scrolling: "no",
      frameborder: "0",
      allowtransparency: "true"
    },
    appleMusic: {
      src: "https://embed.music.apple.com/au/album/battlescar-ep/1148468921?app=music",
      width: "300",
      height: "380",
      sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",
      allow: "autoplay *; encrypted-media *;"
    }
  });

  // const toggleStreamingService = e => {

  // }

  return (
    <Section>
      <SectionTitle>MUSIC</SectionTitle>
      <div className="streaming-service-toggler">
        <button>SPOTIFY</button>
        <button>APPLE MUSIC</button>
      </div>
      {/* <div className="streaming-service-toggler">
        <label className="streaming-service-selector">
          <input type="radio" name="streaming-service-provider" />
          <span class="spotify">Spotify</span>
        </label>
        <label className="streaming-service-selector">
          <input type="radio" name="streaming-service-provider" />
          <span class="apple-music">Apple Music</span>
        </label>
      </div> */}
    </Section>
  )
}

export default Music;
