import axios from 'axios';

export default {
  // Gets all music
  getMusic: function() {
    return axios.get('/api/music');
  },
  // Gets an instance of music by id
  getMusicById: function(id) {
    return axios.get('api/music/' + id);
  },
  // Save new music instance
  saveMusic: function(musicData) {
    return axios.post('/api/music', musicData);
  },
  // Update existing music instance
  updateMusic: function(musicData, id) {
    return axios.post('api/music/' + id, musicData);
  }
};