class Carousel {
  constructor(slider) {
    this.currentIndex = 0;
    this.slideslLength = slider.querySelectorAll(".myCarousel_slide").length;
  }

  _carouselTask(slider, currentIndex, transitionMS = 500) {
    slider.style.transitionDuration = `${transitionMS}ms`;
    slider.style.transform = `translateX(${(-currentIndex - 1) * 100}%)`;
  }

  _prev(roomIndex) {}

  _next(roomIndex) {
    this.currentIndex++;
    this._carouselTask();
  }

  setupCarousel(slider) {
    const slides = slider.querySelectorAll(".myCarousel_slide");
    slider.prepend(slides[0].cloneNode(true));
    slider.prepend(slides[slides.length - 1].cloneNode(true));
    this._carouselTask(slider, 0);
  }

  setupCarouselArrow(arrows) {
    arrows[0].addEventListener("click", () => {
      this._prev(this.currentIndex);
    });

    arrows[1].addEventListener("click", () => {
      this._next(this.currentIndex);
    });
  }

  init() {}
}

export default Carousel;
