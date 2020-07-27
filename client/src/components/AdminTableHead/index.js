import React from 'react';
import './style.css';

const AdminTableHead = props => {
  return (
    <thead className="admin-table-head">
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Type</th>
        <th></th>
      </tr>
    </thead>
  )
}

export default AdminTableHead;