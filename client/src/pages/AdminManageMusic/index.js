import React, { useState } from 'react';
import API from '../../utils/API';
import { Container } from '../../components/Grid';
import AdminHeader from '../../components/AdminHeader';
import AdminWrapper from '../../components/AdminWrapper';
import PageWrapper from '../../components/PageWrapper';
import './style.css';

const AdminManageMusic = () => {
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when user types into the input field
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormObject({ ...formObject, [name]: value })
  };

  const handleFileSelection = ({ target }) => {
    console.log(target.files[0]);
    setFormObject({ ...formObject, fileObj: target.files[0]} );
  }

  // When the form is submitted, use the API.saveMusic method to save music data
  // Then reload books from the database
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageWrapper>
      <AdminHeader />
      <AdminWrapper>
        <Container>
          <form className="manage-music">
            <h2 className="form-title">Add Music</h2>
            <div className="input-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="release-type">Release type</label>
              <input list="release-types" type="text" name="release-type" id="release-type" onChange={handleInputChange} required />
              <datalist id="release-types">
                <option value="EP" />
                <option value="LP" />
                <option value="Single" />
              </datalist>
            </div>
            <div className="input-group">
              <label htmlFor="release-year">Release year</label>
              <input type="text" name="release-year" id="release-year" onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="spotify-url">Spotify link</label>
              <input type="text" name="spotify-url" id="spotify-url" onChange={handleInputChange} />
              <small>
                Provide the link path to the release on Spotify. Follow this <a href="https://open.spotify.com/artist/0uVZxGaRhRW3X3z05qrS1O?si=rallHcqLQay397cmpxFj2w" target="_blank">link</a> to view Red Sea artist page.
              </small>
            </div>
            <div className="input-group">
              <label htmlFor="apple-music-url">Apple Music link</label>
              <input type="text" name="apple-music-url" id="apple-music-url" onChange={handleInputChange} />
              <small>
                Provide the link path to the release on Apple Music. Follow this <a href="https://music.apple.com/au/artist/red-sea/1148468925" target="_blank">link</a> to view Red Sea artist page.
              </small>
            </div>
            <div className="input-group">
              <label htmlFor="cover-art">Cover art</label>
              <input type="file" name="cover-art" id="cover-art" onChange={handleFileSelection} required />
            </div>
          </form>
        </Container>
      </AdminWrapper>
    </PageWrapper>
  )

}

export default AdminManageMusic;