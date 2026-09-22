(() => {
  const lines = [...document.querySelectorAll(".zoom-line")];

  let ticking = false;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function update() {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    lines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      const lineCenter = rect.top + rect.height / 2;

      // 0 when far away, 1 when centered in the viewport.
      const distance = Math.abs(viewportCenter - lineCenter);
      const range = viewportHeight * 0.62;
      const progress = clamp(1 - distance / range, 0, 1);

      // Eased progress makes the “magnifying” moment feel softer.
      const eased = 1 - Math.pow(1 - progress, 3);

      const minScale = 0.76;
      const maxScale = parseFloat(line.dataset.maxScale || "1.12");
      const scale = minScale + (maxScale - minScale) * eased;

      const opacity = 0.28 + 0.72 * eased;
      const blur = 2.0 * (1 - eased);

      // Tiny lift toward center adds depth without looking gimmicky.
      const direction = lineCenter < viewportCenter ? 1 : -1;
      const lift = direction * (1 - eased) * 10;

      line.style.setProperty("--scale", scale.toFixed(4));
      line.style.setProperty("--opacity", opacity.toFixed(4));
      line.style.setProperty("--blur", `${blur.toFixed(2)}px`);
      line.style.setProperty("--lift", `${lift.toFixed(2)}px`);
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick, { passive: true });
})();
