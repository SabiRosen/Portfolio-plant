 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add("animate");
     }
   });
 }, { threshold: 0.5 });

 document.querySelectorAll(".typewriter").forEach(el => {
   observer.observe(el);
 });

