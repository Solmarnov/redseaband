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

  // const handleFileSelection = ({ target }) => {
  //   console.log(target.files[0]);
  //   setFormObject({ ...formObject, fileObj: target.files[0]} );
  // }

  // When the form is submitted, use the API.saveMusic method to save music data
  // Then return to dashboard
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    target.setAttribute('disabled', true);
    API.saveMusic({
      title: formObject.title,
      type: formObject['release-type'],
      src: {
        spotify: formObject['spotify-url'],
        appleMusic: formObject['apple-music-url']
      },
      // img: {
      //   data: formObject.fileObj,
      //   contentType: formObject.fileObj.type
      // },
      releaseYear: formObject['release-year']
    })
    .then(res => {
      window.location.replace('/admin');
    })
    .catch(err => console.log(err));
  };

  // TEST SUBMIT DATA
  // Title: The Score
  // Release type: Single
  // Release year: 2019
  // Spotify link: https://open.spotify.com/embed/album/0n6lPDCeXLdgbLkVESN0MO
  // Apple Music link: https://embed.music.apple.com/au/album/the-score-single/1479957083

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
              <label htmlFor="spotify-url">Spotify embed code source</label>
              <input type="text" name="spotify-url" id="spotify-url" onChange={handleInputChange} />
              <small>
                Provide the source path to the release on Spotify by copying the embed code. E.g. <code>https://open.spotify.com/embed/album/...</code> <br />
                Follow this <a href="https://open.spotify.com/artist/0uVZxGaRhRW3X3z05qrS1O?si=rallHcqLQay397cmpxFj2w" target="_blank">link</a> to view Red Sea artist page on Spotify.
              </small>
            </div>
            <div className="input-group">
              <label htmlFor="apple-music-url">Apple Music embed code source</label>
              <input type="text" name="apple-music-url" id="apple-music-url" onChange={handleInputChange} />
              <small>
                Provide the source path to the release on Apple Music by copying the embed code. E.g. <code>https://embed.music.apple.com/au/album/...</code> <br />
                Follow this <a href="https://music.apple.com/au/artist/red-sea/1148468925" target="_blank">link</a> to view Red Sea artist page on Apple Music.
              </small>
            </div>
            {/* <div className="input-group">
              <label htmlFor="cover-art">Cover art</label>
              <input type="file" name="cover-art" id="cover-art" onChange={handleFileSelection} required />
            </div> */}
            <div className="button-group">
              <button className="cancel"><a href="/admin">Cancel</a></button>
              <button type="submit" className="save" onClick={handleFormSubmit}>Save</button>
            </div>
          </form>
        </Container>
      </AdminWrapper>
    </PageWrapper>
  )

}

export default AdminManageMusic;