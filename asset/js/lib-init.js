function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);
}

function initHomeSlider() {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    draggable: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function initHeroSlider() {
  gsap.registerPlugin(ScrollTrigger);

  const slider = document.querySelector(".process__slider");
  if (!slider) return;

  const isMobile = window.innerWidth <= 767;

  gsap.to(slider, {
    x: "-90%",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: isMobile ? ".process__slider" : ".process",
      start: "top 20%",
      end: "bottom -105%",
      scrub: true,
      pin: true,
    },
  });

  ScrollTrigger.refresh();
}

function initTestimonialSlider() {
  const el = document.querySelector("#testimonial-slider");
  if (!el) return;

  const splide = new Splide(el, {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 3000,
    speed: 800,
    easing: "ease",
    gap: "2rem",
    padding: { left: "10%", right: "10%" },
    pagination: false,
    arrows: false,
    resetProgress: false,
    breakpoints: {
      1240: { perPage: 2, padding: { left: "5%", right: "5%" } },
      768: { perPage: 1, padding: { left: "5%", right: "5%" } },
    },
  });

  document
    .querySelector(".custom-prev")
    ?.addEventListener("click", () => splide.go("<"));
  document
    .querySelector(".custom-next")
    ?.addEventListener("click", () => splide.go(">"));

  splide.on("mounted move", () => {
    const currentIndex = splide.index % splide.length;
    document.querySelectorAll(".custom-pagination img").forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
  });

  document.querySelectorAll(".custom-pagination img").forEach((img) => {
    img.addEventListener("click", () => {
      const index = parseInt(img.getAttribute("data-slide"));
      splide.go(index);
    });
  });

  splide.mount();
}

function initWorkSlidesSlider() {
  const el = document.querySelector("#wordSlides__slider");
  if (!el) return;

  const splide = new Splide(el, {
    type: "loop",
    perPage: 1,
    focus: "center",
    padding: { left: 0, right: "20%" },
    gap: "1rem",
    pagination: false,
    arrows: false,
    breakpoints: {
      992: {
        perPage: 2,
        padding: 0,
        focus: "start",
      },
      767: {
        perPage: 1,
        focus: "center",
        padding: { left: 0, right: "20%" },
      },
      576: {
        perPage: 1,
        padding: 0,
        focus: "start",
      },
    },
  });

  splide.mount();

  document
    .querySelector(".workSlides__prev")
    ?.addEventListener("click", () => splide.go("<"));
  document
    .querySelector(".workSlides__next")
    ?.addEventListener("click", () => splide.go(">"));
}

function initReveal() {
  document.querySelectorAll(".reveal").forEach((text) => {
    // Split text
    let splitText = new SplitType(text, {
      type: "words",
    });

    // Animation
    const section = text.closest("section");
    gsap.from(splitText.words, {
      opacity: 0,
      y: 20,
      ease: "power2.out",
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * 3}px`,
        scrub: true,
        // markers: true,
        pin: true,
      },
    });
  });
}

function initHeroVideoScale() {
  gsap.registerPlugin(ScrollTrigger);

  // ✅ Animate video scale on scroll
  gsap.to(".hero__video", {
    borderRadius: "10px",
    scale: 0.9,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom center",
      scrub: true,
      height: "100%",
      margin: " 5rem 0 ",

      // markers: true, // 👉 Uncomment for debugging
    },
  });
}


function initImgGsap() {
    gsap.registerPlugin(ScrollTrigger);

      // Sabhi .portsingle__img ko loop karo
      gsap.utils.toArray(".portsingle__img").forEach((imgBox) => {
        const img = imgBox.querySelector("img");

        gsap.to(img, {
          scale: 1.3,
          ease: "none",
          scrollTrigger: {
            trigger: imgBox,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
}