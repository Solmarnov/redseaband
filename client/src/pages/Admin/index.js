import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import AdminHeader from '../../components/AdminHeader';
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

  return (
    <PageWrapper>
      <AdminHeader />
    </PageWrapper>
  )


}

export default Admin;
