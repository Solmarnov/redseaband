import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Menu from '../../components/Menu';
import Cover from '../../components/Cover';
import Socials from '../../components/Socials';
import Music from '../../components/Music';
import Bio from '../../components/Bio';


const Home = () => {
  return (
    <PageWrapper>
      <Menu />
      <Cover />
      <Socials />
      <Music />
      <Bio />
    </PageWrapper>
  )
}

export default Home;