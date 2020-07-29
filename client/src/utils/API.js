import axios from 'axios';

export default {
  // Gets all music
  getMusic: function(id) {
    return !id ? axios.get('api/music') : axios.get('api/music/' + id);
    // if (!id) {
    //   return axios.get('/api/music');
    // } else {
    //   return axios.get('api/music/' + id);
    // }
  },
  saveMusic: function(musicData, id) {
    return !id ? axios.post('/api/music', musicData) : axios.post('api/music/' + id, musicData);
  },
};