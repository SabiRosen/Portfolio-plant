const leaves = document.querySelectorAll("#top-plant .tt-leaf");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  leaves.forEach((leaf, i) => {
    const rotate = x * (i + 1) * 4;      // forskellig rotation
    const translate = y * (i + 1) * 3;   // forskellig bevægelse

    leaf.style.transform =
      "rotate(" + rotate + "deg) translateY(" + translate + "px)";
  });
});


