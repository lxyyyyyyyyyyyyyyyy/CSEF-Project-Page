document.querySelectorAll('[data-comparison]').forEach((comparison) => {
  const slider = comparison.querySelector('.comparison-range');
  const update = () => comparison.style.setProperty('--position', `${slider.value}%`);
  slider.addEventListener('input', update);
  update();
});
