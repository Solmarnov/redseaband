import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import './style.css';

const Bio = () => {
  return (
    <Section>
      <div className="section-wrapper">
        <SectionTitle>BIO</SectionTitle>
        <div className="bio-content">
          RED SEA burst onto the music landscape in 2016 with their debut EP <i>Battlescar</i> that was produced by the legendary triple Grammy nominated Rick Will (Fear Factory, NIN, Cold Chisel). After two Australian and New Zealand tours they re-grouped and in 2018 released the stand out singles and kick-arse videos - <i>Hurricane</i> and <i>The Art of Transcending</i> - and completed two more Australian tours to huge critical acclaim and a growing army of loyal fans. With a sound likened to the love child of <b>Jinjer</b>, <b>Pantera</b>, and <b>Muse</b>, RED SEA stand out among a sea of sameness.
        </div>
      </div>
    </Section>
  );
}

export default Bio;