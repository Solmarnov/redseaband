import React from 'react';
import './style.css';

const StreamingToggler = props => {
  const active = props.active;
  return (
    <div className="streaming-toggler">
      <button 
        className={props.active ? `active` : ``} 
        name="spotify"
        onClick={props.toggleStreamingService}
      >
        SPOTIFY
      </button>
      <button 
        className={!active ? `active` : ``} 
        name="apple-music"
        onClick={props.toggleStreamingService}
      >
        APPLE MUSIC
      </button>
    </div>
  )
}

export default StreamingToggler;