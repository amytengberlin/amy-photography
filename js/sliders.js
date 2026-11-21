// Amy Photography — testimonials slider + photo carousels
(() => {
  const html = document.documentElement;
  const isDe = () => html.lang === "de";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Testimonials: fades to the next one automatically ----------
  // To add a testimonial, copy one <figure class="testimonial"> block in index.html.
  // With 2 or more, the arrows and dots appear and the slider rotates by itself.
  const AUTOPLAY_MS = 7000;

  document.querySelectorAll("[data-testimonials]").forEach((root) => {
    const slides = [...root.querySelectorAll(".testimonial")];
    if (!slides.length) return;
    const multi = slides.length > 1;
    const dotsBox = root.querySelector(".slider-dots");
    const prev = root.querySelector(".slider-prev");
    const next = root.querySelector(".slider-next");
    let current = 0;
    let timer = null;

    root.classList.add("is-ready");
    root.classList.toggle("has-multiple", multi);

    const dots = multi
      ? slides.map((_, i) => {
          const b = document.createElement("button");
          b.type = "button";
          b.addEventListener("click", () => { show(i); restart(); });
          dotsBox.appendChild(b);
          return b;
        })
      : [];

    const labelDots = () =>
      dots.forEach((b, i) =>
        b.setAttribute("aria-label", (isDe() ? "Stimme " : "Testimonial ") + (i + 1))
      );

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, n) => {
        const on = n === current;
        s.classList.toggle("is-active", on);
        s.setAttribute("aria-hidden", String(!on));
      });
      dots.forEach((b, n) => {
        b.classList.toggle("is-active", n === current);
        b.setAttribute("aria-current", String(n === current));
      });
    }

    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (multi && !reduceMotion && !document.hidden) timer = setInterval(() => show(current + 1), AUTOPLAY_MS);
    };
    const restart = start;

    if (prev) prev.addEventListener("click", () => { show(current - 1); restart(); });
    if (next) next.addEventListener("click", () => { show(current + 1); restart(); });

    // pause while someone is reading / hovering
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

    // keep dot labels in the right language
    new MutationObserver(labelDots).observe(html, { attributes: true, attributeFilter: ["lang"] });

    labelDots();
    show(0);
    start();
  });

  // ---------- Photo carousels (category pages) ----------
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".carousel-track");
    const prev = root.querySelector(".carousel-prev");
    const next = root.querySelector(".carousel-next");
    if (!track || !prev || !next) return;

    const step = () => Math.max(track.clientWidth * 0.85, 240);
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    };

    prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    track.querySelectorAll("img").forEach((img) => img.addEventListener("load", update));
    update();
  });
})();
