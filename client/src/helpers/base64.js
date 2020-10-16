export default {
  // Encodes binary to ASCII
  encode: function(binary) {
    return btoa(binary);
  },
  // Decodes ASCII to binary
  decode: function(base64) {
    return base64.atob();
  } 
}