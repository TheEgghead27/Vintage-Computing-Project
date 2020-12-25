// yes this code is garbage i literally just "learned" javascript to make it so shut up
const path = window.location.pathname.toString();
try {
  var isMain =(!((path.endsWith("index.html")) || (path.endsWith("/"))))
}
catch(err) {
  if (!err.name == "TypeError") {
    throw err
  }
  else {
  var isMain = true  // screw it when IE doesn't let me check endsWith, just run the randomizer anyways
  }
}
finally {
  // randomly generate background CSS
  if (isMain) {
    const backgrounds = new Array('7.jpg', 'Bahamas_Aerial.jpg', 'Lake.jpg', 'Lion.jpg', 'Mt._Fuji.jpg', 'vista.jpg', 'Wave.jpg', 'Yosemite_2.jpg', 'Yosemite_5.jpg', 'Yosemite.jpg');
    const randomNum = Math.floor(Math.random() * backgrounds.length);
    var newCSS = "url('backgrounds/" + backgrounds[randomNum] + "') no-repeat center center fixed";
  }
  else {
    // Homepage is always Windows XP Bliss
    var newCSS = "url('backgrounds/bliss.jpg') no-repeat center center fixed";
  }

  // edit CSS (Big McThankies from McSpankies, https://css-tricks.com/perfect-full-page-background-image/)
  const html = document.getElementsByTagName("html")[0];
  html.style.background = newCSS;
  html.style.WebkitBackgroundSize = "cover";
  html.style.MozBackgroundSize = "cover";
  html.style.OBackgroundSize = "cover";
  html.style.backgroundSize = "cover";
  html.style.backgroundColor = "#008080";
}
