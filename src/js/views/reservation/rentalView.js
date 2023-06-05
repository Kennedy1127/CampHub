class RentalView {
  createRentalCarousel() {
    const slider = document.querySelector(".myCarousel_slider");
    const slides = slider.querySelectorAll(".myCarousel_slide");
    let currentIndex = 0;

    const carouselTask = (currentIndex, transitionMS = 500) => {
      slider.style.transitionDuration = `${transitionMS}ms`;
      slider.style.transform = `translateX(${
        (-currentIndex - 1) * (slides[0].offsetWidth + 10)
      }px)`;

      if (transitionMS === 0) {
        setTimeout(() => {
          slider.style.transitionDuration = "500ms";
        }, 1);
      }
    };

    const prev = () => {
      if (currentIndex === -1) return;
      currentIndex--;
      carouselTask(currentIndex);
    };

    const next = () => {
      if (currentIndex === slides.length - 1) return;
      currentIndex++;
      carouselTask(currentIndex);
    };

    const setupCarousel = () => {
      slider.append(slides[0].cloneNode(true));
      slider.append(slides[1].cloneNode(true));
      slider.append(slides[2].cloneNode(true));
      slider.append(slides[3].cloneNode(true));
      slider.prepend(slides[slides.length - 4].cloneNode(true));
      carouselTask(0);
    };

    const setupCarouselArrows = () => {
      const arrows = document.querySelectorAll(".myCarousel_arrow");
      arrows[0].addEventListener("click", () => {
        prev();
      });

      arrows[1].addEventListener("click", () => {
        next();
      });
    };

    const setupInfiniteCarousel = () => {
      slider.addEventListener("transitionend", () => {
        if (currentIndex === slides.length - 1) {
          currentIndex = 0;
          carouselTask(currentIndex, 0);
        }

        if (currentIndex === -1) {
          currentIndex = slides.length - 2;
          carouselTask(currentIndex, 0);
        }
      });
    };

    // setupCarousel();
    setupCarouselArrows();
    setupInfiniteCarousel();
  }

  init() {
    this.createRentalCarousel();
  }
}

export default new RentalView();
