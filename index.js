const images = [
  'Alya_noodles.png',
  'Blue alya.png',
  'Frieren.jpg',
  'Hakurei.Reimu.jpg',
  'Little_stars.jpg',
  //'Masha.png',
  //'shenhe.png',
  //'Yuki_green.png',
  //'Yuki.png',
  //'Yuki_run.png',
  'Blue.Archive.png',
  'Boy_99235.png',
  'Sketch.jpg',
  'Sinon.jpg',
  'hatsunemiku.jpg',
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const randomImage = getRandomImage();

var viewPortWidth;
var viewPortHeight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
if (typeof window.innerWidth != 'undefined') {
  viewPortWidth = window.innerWidth,
  viewPortHeight = window.innerHeight
}

document.getElementById('img').src = "Pics/"+randomImage+'/'+ randomImage;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href ="Pics/"+randomImage+'/'+ randomImage+".css";
document.head.appendChild(link);

const image = document.getElementById('img');
const imdiv = document.getElementById('pic');

function handleResize() {
  if (window.innerWidth < window.innerHeight) {
    image.style.display = 'none';
    pic.style.display = 'none';
  } else {
    image.style.display = 'block';
    pic.style.display = 'block'
  }
}

window.addEventListener('resize', handleResize);

// Initial check
handleResize();
