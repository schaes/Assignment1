const videos = document.querySelectorAll('.video-item');
const videoLabel = document.getElementById('videoLabel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentVideoIndex = 0;

// Function to update the active video and label
function updateActiveVideo() {
  videos.forEach((video, index) => {
    if (index === currentVideoIndex) {
      video.classList.add('active');
      videoLabel.textContent = video.getAttribute('data-title'); //to get the title of the vid
    } else {
      video.classList.remove('active');
    }
  });
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; //+videos length to make sure the code wraps around back to first after scrolling through everything
  updateActiveVideo();
});

nextBtn.addEventListener('click', () => {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  updateActiveVideo();
});

// Initialize the first video as active
updateActiveVideo();

