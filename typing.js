// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate");
//     }
//   });
// }, { threshold: 0.5 });

// document.querySelectorAll(".typewriter").forEach(el => {
//   observer.observe(el);
// });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const text = el.textContent;

    el.innerHTML = "";

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${i * 0.05}s`;
      el.appendChild(span);
    });

    observer.unobserve(el); // kør kun én gang
  });
}, { threshold: 0.3 });

document.querySelectorAll(".wave").forEach(el => observer.observe(el));
