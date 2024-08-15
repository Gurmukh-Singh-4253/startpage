const images = [
  'Alya_noodles.png',
  'Blue alya.png',
  'Frieren.jpg',
  'Hakurei.Reimu.jpg',
  'Little_stars.jpg',
  'Masha.png',
  'shenhe.png',
  'Yuki_green.png',
  'Yuki.png',
  'Yuki_run.png',
  'Blue.Archive.png',
  'Boy_99235.png',
  'Sketch.jpg'
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const randomImage = getRandomImage();
document.getElementById('img').src = "Pics/"+randomImage+'/'+ randomImage;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href ="Pics/"+randomImage+'/'+ randomImage+".css";
document.head.appendChild(link);
