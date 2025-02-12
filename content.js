let controlsHidden = false;
const HIDE_CONTROLS_CLASS = 'ytp-chrome-controls-hidden';

function toggleControls() {
  const player = document.querySelector('.html5-video-player');
  if (!player) return;

  controlsHidden = !controlsHidden;

  // Elements to toggle
  const elements = [
    '.ytp-chrome-bottom',         // Progress bar and controls
    '.ytp-chrome-top',           // Title and top buttons
    '.ytp-gradient-bottom',      // Bottom gradient
    '.ytp-gradient-top',         // Top gradient
    '.ytp-pause-overlay',        // Suggested videos overlay
    '.ytp-spinner',              // Loading spinner
    '.ytp-watermark',            // YouTube logo
    '.ytp-cards-button',         // Cards button
    '.ytp-iv-player-content'     // Annotations
  ];

  elements.forEach(selector => {
    const element = player.querySelector(selector);
    if (element) {
      element.style.display = controlsHidden ? 'none' : '';
    }
  });

  // Add/remove class to player for any CSS-specific changes
  player.classList.toggle(HIDE_CONTROLS_CLASS, controlsHidden);
}

document.addEventListener('keydown', (e) => {
  // Check if we're in fullscreen
  if (document.fullscreenElement) {
    // Check for Ctrl+Q
    if (e.ctrlKey && e.key.toLowerCase() === 'q') {
      e.preventDefault();
      toggleControls();
    }
  }
});