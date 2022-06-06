const container = document.getElementById('body');

container.addEventListener('mouseover', (ev) => {
  console.log(ev.target.classList);
  if (ev.target.classList.contains('welcome-section')) {
    const welcomeTexts = document.querySelectorAll('.welcome-text');
    const welcomeBgs = document.querySelectorAll('.welcome-bg');
    welcomeBgs.forEach(bg => {
      bg.classList.add('welcome-showtime');
    });
    welcomeTexts.forEach(text => {
      text.classList.remove('hidden');
      text.classList.add('welcome-showtime');
    })
  }
})
