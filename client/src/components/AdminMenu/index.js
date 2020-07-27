import React from 'react';
import './style.css';

const AdminMenu = () => {
  return (
    <div className="admin-left-pane-menu-wrapper">
      <h2 className="admin-left-pane-menu-title">Content Manager</h2>
      <ul className="admin-left-pane-menu">
        <li><a href="#">Manage Music</a></li>
      </ul>
    </div>
  )
}

export default AdminMenu;