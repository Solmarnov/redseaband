import React from 'react';
import './style.css';

const AdminTableBody = ({ music }) => {
  return (
    <tbody className="admin-table-body">
      {music.map((obj, i) => {
        return (
          <tr>
            <td id="row">{i + 1}</td>
            <td id="title">{obj.title}</td>
            <td id="type">{obj.type}</td>
            <td id="edit" key={obj._id}><a href=""><i class="far fa-edit"></i></a></td>
          </tr>)
      })}
    </tbody>
  )
}

export default AdminTableBody;