// Optional: You can add confetti or sound effects later.
// This basic JS adds sparkles via CSS.
console.log("Sparkle effect loaded 🎇");
<script>
  const audio = document.getElementById('audio');
  const playPause = document.getElementById('playPause');
  const seekBar = document.getElementById('seekBar');

  playPause.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPause.textContent = '⏸️';
    } else {
      audio.pause();
      playPause.textContent = '▶️';
    }
  });

  audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  });

  seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  });
</script>
