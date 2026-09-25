document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const ambience = document.getElementById('swell');
const ambienceToggle = document.querySelector('[data-sound-toggle]');

if (ambience && ambienceToggle) {
  ambience.volume = 0.2;

  ambienceToggle.addEventListener('click', async () => {
    if (ambience.paused) {
      try {
        await ambience.play();
        ambienceToggle.textContent = 'Pause lair ambience';
        ambienceToggle.setAttribute('aria-pressed', 'true');
      } catch {
        ambienceToggle.textContent = 'Ambience unavailable';
      }
      return;
    }

    ambience.pause();
    ambienceToggle.textContent = 'Enable lair ambience';
    ambienceToggle.setAttribute('aria-pressed', 'false');
  });
}
