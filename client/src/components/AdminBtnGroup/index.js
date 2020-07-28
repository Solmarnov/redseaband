import React from 'react';
import './style.css';

const AdminBtnGroup = props => {

  return (
    <div className="admin-btn-group">
      <a href="/admin/manage-music" className="admin-btn">
        Add Music
        <i className="fas fa-plus"></i>
      </a>
    </div>
  )
}

export default AdminBtnGroup;