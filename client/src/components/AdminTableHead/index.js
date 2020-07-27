import React from 'react';
import './style.css';

const AdminTableHead = props => {
  return (
    <thead className="admin-table-head">
      <th>#</th>
      <th>Title</th>
      <th>Type</th>
      <th></th>
    </thead>
  )
}

export default AdminTableHead;