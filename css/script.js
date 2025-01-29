// This script loads Instagram embeds asynchronously
window.addEventListener('load', function () {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  });
  let images = ['images/home1.png', 'images/home2.png']; // Array of images
let currentIndex = 0;

function changeBackgroundImage() {
    // Set the next image
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    document.querySelector('.home').style.backgroundImage = `url(${images[currentIndex]})`; // Change background image
}

// Change the background every 5 seconds
setInterval(changeBackgroundImage, 5000);
function playAudio() {
  var audio = document.getElementById("backgroundAudio");
  
  // Play or pause the audio depending on its current state
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


