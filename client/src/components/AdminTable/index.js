import React from 'react';
import './style.css';

const AdminTable = ({ children }) => {
  return <table className="admin-table">{children}</table>
}

export default AdminTable;