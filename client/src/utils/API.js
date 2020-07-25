import axios from 'axios';

export default {
  // Gets all music
  getMusic: function() {
    return axios.get('/api/music');
  },
  saveMusic: function(musicData) {
    return axios.post('/api/music', musicData);
  }
};