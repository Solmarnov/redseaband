import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import AdminBtnGroup from '../../components/AdminBtnGroup';
import AdminContent from '../../components/AdminContent';
import AdminContentTitle from '../../components/AdminContentTitle';
import AdminHeader from '../../components/AdminHeader';
import AdminLeftPane from '../../components/AdminLeftPane';
import AdminMenu from '../../components/AdminMenu';
import AdminTable from '../../components/AdminTable';
import AdminTableBody from '../../components/AdminTableBody';
import AdminTableHead from '../../components/AdminTableHead';
import AdminWrapper from '../../components/AdminWrapper';
import PageWrapper from '../../components/PageWrapper';
import './style.css';

const Admin = () => {
  const [music, setMusic] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadMusic()
  }, [])

  const loadMusic = () => {
    API.getMusic()
    .then(res => setMusic(res.data))
    .catch(err => console.log(`
      loadMusic encountered error: 
      ${err}
    `));
  };

  console.log(music);

  return (
    <PageWrapper>
      <AdminHeader />
      <AdminWrapper>
        <AdminLeftPane>
          <AdminMenu />
        </AdminLeftPane>
        <AdminContent>
          <AdminBtnGroup />
          <AdminContentTitle />
          <AdminTable>
            <AdminTableHead />
            <AdminTableBody music={music} />
          </AdminTable>
        </AdminContent>
      </AdminWrapper>
    </PageWrapper>
  )
}

export default Admin;
