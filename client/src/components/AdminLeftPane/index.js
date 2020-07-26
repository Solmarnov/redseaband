import React from 'react';
import './style.css';
import Admin from '../../pages/Admin';

const AdminLeftPane = props => {
  return <div className="admin-left-pane">{props.children}</div>
}

export default AdminLeftPane;