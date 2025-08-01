document.addEventListener("DOMContentLoaded", () => {
  // Page load handler
  function loadHTML(path) {
    fetch(path)
      .then((res) => res.text())
      .then((html) => {
        const app = document.getElementById("app");
        app.innerHTML = html;
        window.scrollTo(0, 0);

        // 👇 Re-initialize features after content load
        initHomeSlider();
        initToolsTipes();
        initHeader();
        initAccordion(app); // Pass scope (you were using scope before)
        initVertial();
        initReveal();
        initHeroVideoScale();
        initSmoothScroll();
        initHeroSlider();
        initTestimonialSlider();
        initWorkSlidesSlider();
        initImgGsap();
      });
  }

  // Page.js routing
  page("/", () => loadHTML("index.html"));
  page("/portfolio", () => loadHTML("portfolio.html"));
  page("/portfolio-single", () => loadHTML("porfolio-single.html"));
  page("/services", () => loadHTML("services.html"));
  page("/services-single", () => loadHTML("services-single.html"));
  page("/services-single-2", () => loadHTML("services-single-2.html"));
  page();

  // Intercept all link clicks with data-link
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      page.show(target);
    }
  });

  // 👇 Initial page load init (for index.html)
  initHomeSlider();
  initToolsTipes();
  initHeader();
  initAccordion(document); // Scope is document here
  initVertial();
  initReveal();
  initSmoothScroll();
  initHeroSlider();
  initTestimonialSlider();
  initWorkSlidesSlider();
  initHeroVideoScale();
  initImgGsap();
});
