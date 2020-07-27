import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import AdminBtnGroup from '../../components/AdminBtnGroup';
import AdminContent from '../../components/AdminContent';
import AdminContentTitle from '../../components/AdminContentTitle';
import AdminHeader from '../../components/AdminHeader';
import AdminLeftPane from '../../components/AdminLeftPane';
import AdminMenu from '../../components/AdminMenu';
import AdminTable from '../../components/AdminTable';
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

  // Handles updating component state when user types into the input field
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveMusic method to save music data
  // Then reload books from the database
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
          </AdminTable>
        </AdminContent>
      </AdminWrapper>
    </PageWrapper>
  )


}

export default Admin;
