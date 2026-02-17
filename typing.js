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

/*mobil nav */

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".mobil-menu");
  const closeBtn = document.querySelector(".close-menu");

  const openMenu = () => {
    menu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);

  // klik udenfor
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    if (!menu.contains(e.target) && e.target !== burger) {
      closeMenu();
    }
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // klik på link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});
