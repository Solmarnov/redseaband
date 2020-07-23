const MTUserId='0718c882-98e1-4d0d-adfc-287e3f1a8773';
const MTFontIds = new Array();

MTFontIds.push("1475678"); // Cochin® W01 Roman (Cochin)
MTFontIds.push("5638548"); // Herencia W05 Regular (Herencia)

(() => {
  const mtTracking = document.createElement('script');
  mtTracking.type='text/javascript';
  mtTracking.async='true';
  mtTracking.src='mtiFontTrackingCode.js';

  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(mtTracking);
})();