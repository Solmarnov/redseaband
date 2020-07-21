import React from 'react';
import Menu from '../../components/Menu';
import Cover from '../../components/Cover';
import Socials from '../../components/Socials';
import Bio from '../../components/Bio';


const Home = () => {
  return (
    <div className="page-wrapper">
      <Menu />
      <Cover />
      <Socials />
      <Bio />
    </div>
  )
}

export default Home;