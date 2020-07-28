import React from 'react';
import './style.css';

const AdminTableHead = props => {
  return (
    <thead className="admin-table-head">
      <tr>
        <th id="row">#</th>
        <th id="title">Title</th>
        <th id="type">Type</th>
        <th id="edit"></th>
      </tr>
    </thead>
  )
}

export default AdminTableHead;