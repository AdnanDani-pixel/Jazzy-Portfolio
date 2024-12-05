(function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    let today = new Date(),
    launchDate = new Date(today.getTime() + 14 * day);
    const countDown = setInterval(function() {
    const now = new Date().getTime(),
    distance = launchDate.getTime() - now;
    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    if (distance < 0) {
    document.getElementById("headline").innerText = "Launched!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(countDown);
    }
    }, 1000) // Update every 1 second
    }());
// Get the audio element
const audio = document.getElementById('myAudio');

// Store the current playback time in local storage when the page is unloaded
window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audio.currentTime);
});

// Seek to the stored playback time when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedTime = localStorage.getItem('audioTime');
    if (storedTime) {
        audio.addEventListener('canplay', () => {
            audio.currentTime = storedTime;
        });
    }
});

// Start the audio again from the beginning when it's complete
audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
});
