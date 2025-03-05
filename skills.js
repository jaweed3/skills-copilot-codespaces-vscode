function displayVideo(videoUrl) {
    // Create a video element
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.width = 600; // Set the width of the video

    // Create a pause button
    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    pauseButton.onclick = () => video.pause();

    // Create a next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.onclick = () => {
        // Logic for loading the next video
        video.src = 'path/to/your/next/video.mp4';
        video.play();
    };

    // Create a full screen button
    const fullScreenButton = document.createElement('button');
    fullScreenButton.textContent = 'Full Screen';
    fullScreenButton.onclick = () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    };

    // Append the video and buttons to the body
    document.body.appendChild(video);
    document.body.appendChild(pauseButton);
    document.body.appendChild(nextButton);
    document.body.appendChild(fullScreenButton);
}

// Example usage
displayVideo('path/to/your/video.mp4');