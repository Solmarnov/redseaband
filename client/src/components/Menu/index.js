import React from 'react';
import './style.css';

const Menu = () => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><a href="#">BIO</a></li>
              <li><a href="#">MUSIC</a></li>
              <li><a href="#">VIDEO</a></li>
              <li><a href="#">TOUR</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;