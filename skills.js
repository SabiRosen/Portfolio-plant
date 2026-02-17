(() => {
  const section = document.querySelector(".skills");
  if (!section) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        document.querySelector(".skills-wrapper")
          .classList.add("is-visible");
        io.disconnect();
      }
    },
    {
      threshold: 0.65,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  io.observe(section);
})();
