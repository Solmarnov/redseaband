import React from 'react';
import Bio from '../../components/Bio';
import Cover from '../../components/Cover';
import HRule from '../../components/HRule';
import Menu from '../../components/Menu';
import Music from '../../components/Music';
import PageWrapper from '../../components/PageWrapper';
import Socials from '../../components/Socials';
import Video from '../../components/Video';


const Home = () => {
  return (
    <PageWrapper>
      <Menu 
        musicLink="/music"
      />
      <Cover />
      <Socials />
      <Bio />
      <HRule />
      <Music />
      <HRule />
      <Video />
      <HRule />
      <Socials />
    </PageWrapper>
  )
}

export default Home;