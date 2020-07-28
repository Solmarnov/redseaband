import React from 'react';
import './style.css';

const AdminTable = ({ children }) => {
  return (
    <div className="table-wrapper">
      <table className="admin-table" cellSpacing="0">{children}</table>
    </div>
  )
}

export default AdminTable;