import React from 'react';
import './style.css';

const AdminTableBody = ({ music }) => {
  return (
    <tbody className="admin-table-body">
      {music.map((obj, i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{obj.title}</td>
            <td>{obj.type}</td>
            <td key={obj._id}><a href=""><i class="far fa-edit"></i></a></td>
          </tr>)
      })}
    </tbody>
  )
}

export default AdminTableBody;