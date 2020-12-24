// randomly generate background CSS
const path = window.location.pathname.toString();
if (!path.endsWith("index.html")) {
  const backgrounds = new Array('7.jpg', 'Bahamas_Aerial.jpg', 'Lake.jpg', 'Lion.jpg', 'Mt. Fuji.jpg', 'vista.jpg', 'Wave.jpg', 'Yosemite_2.jpg', 'Yosemite_5.jpg', 'Yosemite.jpg');
  const randomNum = Math.floor(Math.random() * backgrounds.length);
  var newCSS = "url('backgrounds/" + backgrounds[randomNum] + "') no-repeat center center fixed";
}
else {
  // Homepage is always Windows XP Bliss
  // Bliss is separate to keep it out of the random background pool
  var newCSS = "url('images/bliss.jpg') no-repeat center center fixed";
}
// yes this code is garbage i literally just "learned" javascript to make it so shut up

// edit CSS (Big McThankies from McSpankies, https://css-tricks.com/perfect-full-page-background-image/)
const html = document.getElementsByTagName("html")[0];
html.style.background = newCSS;
html.style.WebkitBackgroundSize = "cover";
html.style.MozBackgroundSize = "cover";
html.style.OBackgroundSize = "cover";
html.style.backgroundSize = "cover";
html.style.backgroundColor = "#008080";
