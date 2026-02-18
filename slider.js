 document.querySelectorAll('.indholds-slider-wrap').forEach((wrap) => {
    const slider = wrap.querySelector('[data-slider]');
    const prev = wrap.querySelector('.slider-btn.prev');
    const next = wrap.querySelector('.slider-btn.next');

    const getStep = () => {
      // scroller ca. 1 "kort" ad gangen (80% af sliderens bredde)
      return Math.round(slider.clientWidth * 0.8);
    };

    prev.addEventListener('click', () => {
      slider.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
      slider.scrollBy({ left: getStep(), behavior: 'smooth' });
    });
  });