import React from 'react';
import Menu from '../../components/Menu';
import Cover from '../../components/Cover';
import Socials from '../../components/Socials';


const Home = () => {
  return (
    <div className="page-wrapper">
      <Menu />
      <Cover />
      <Socials />
    </div>
  )
}

export default Home;