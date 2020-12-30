setInterval(() => {
  for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
    button.click(); // "Skip Ad" or "Skip Ads" buttons
  }

  let progressBar = document.getElementsByClassName('ytp-play-progress')[0];
  if (getComputedStyle(progressBar)['background-color'] === 'rgb(255, 204, 0)') {
    let video = document.getElementsByClassName('html5-main-video')[0];
    if (!video.paused) {
      video.currentTime = video.duration;
    }
  }
}, 300);
