(() => {
  const steps = document.querySelectorAll(".about-step");
  const visuals = document.querySelectorAll(".visual");
  if (!steps.length || !visuals.length) return;

  function setActive(id) {
    visuals.forEach(v => v.classList.toggle("is-active", v.id === id));
    steps.forEach(s => s.classList.toggle("is-active", s.dataset.visual === id));
  }

  // Observer: vælg det step der er mest “midt på skærmen”
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        const id = entry.target.dataset.visual;
        setActive(id);
      }
    });
  },
  {
    threshold: [0.6],
  }
);


  steps.forEach(step => observer.observe(step));
})();
