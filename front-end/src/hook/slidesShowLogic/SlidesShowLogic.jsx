export function showSlide(index) {
  const slides = document.querySelectorAll(".Shoppe__banner");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  if (slides[index]) {
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }
}

export function autoSlide(setSlideIndex, slidesData) {
  const autoSlide = setInterval(() => {
    setSlideIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  }, 4000);
  return () => {
    clearInterval(autoSlide);
  };
}

export function currentSlide(setSlideIndex, index) {
  setSlideIndex(index);
}
