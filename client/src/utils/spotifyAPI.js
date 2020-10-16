import axios from 'axios';
import qs from 'qs';
import base64 from '../helpers/base64';

export default {
  // Gets a Spotify token
  getToken: function() {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET_ID;
    const authorization = base64.encode(`${clientId}:${clientSecret}`);
    const headers = {
      headers: {
        "Authorization": `Basic ${authorization}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const data = qs.stringify({
      "grant_type": "client_credentials"
    })
    return axios.post(`https://accounts.spotify.com/api/token`, 
      {headers: headers, data: data});
  },
  // Gets a Spotify Artist
  getArtist: function() {
    const artistID = "0uVZxGaRhRW3X3z05qrS1O";
    return axios.get(`https://api.spotify.com/v1/artists/${artistID}`);
  }
};



// Code from Postman
// var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//  'grant_type': 'client_credentials' 
// });
// var config = {
//   method: 'post',
//   url: 'https://accounts.spotify.com/api/token',
//   headers: { 
//     'Authorization': 'Basic NTQ2MTdkYmU1MmZmNDc4YTg5ZWIyNjMwNWNjNzQ1ZmU6NWYxN2M3NDYzMTAyNGEzMTk1MGIxNjgzNWJiOTU3NmE=', 
//     'Content-Type': 'application/x-www-form-urlencoded', 
//     'Cookie': '__Host-device_id=AQAMvjdTH64k98sScmW1cuO_AbKU1PNrq0lnMGffRgE4GRHjA3A-uY0fu_62gq8FTEb4v-I-FSL7nlBh9eLFCVNgHtKCdaPXTIw'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });