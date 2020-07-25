import React from 'react';
import logo from '../../assets/images/RedSeaLogo.png';
import './style.css';

const AdminHeader = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Red Sea logo" />
      </div>
      <ul className="nav">
        <li>
          Red Sea Admin
          <i class="fa fa-chevron-down"></i>
          <ul>
            <li><a class="logout">Logout</a></li>
          </ul>
        </li>
        
      </ul>
    </header>
  )
}

export default AdminHeader;