import React from 'react';
import './style.css';

const AdminTableBody = ({ music }) => {
  return (
    <tbody className="admin-table-body">
      {/* Hard-coded version for local testing (stupid 431 error!)
      <tr>
        <td id="row">1</td>
        <td id="title">Battlescar</td>
        <td id="type">EP</td>
        <td id="edit" key={1}><a href="/admin/edit-music/1"><i className="far fa-edit"></i></a></td>
      </tr> */}
      {music.map((obj, i) => {
        return (
          <tr>
            <td id="row">{i + 1}</td>
            <td id="title">{obj.title}</td>
            <td id="type">{obj.type}</td>
            <td id="edit" key={obj._id}><a href={`/admin/edit-music/${obj._id}`}><i className="far fa-edit"></i></a></td>
          </tr>)
      })}
    </tbody>
  )
}

export default AdminTableBody;