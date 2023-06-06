class RentalView {
  createRentalCarousel() {
    const slider = document.querySelector(".myCarousel_slider");
    const slides = slider.querySelectorAll(".myCarousel_slide");
    let currentIndex = 0;

    const carouselTask = (currentIndex, transitionMS = 500) => {
      slider.style.transitionDuration = `${transitionMS}ms`;
      slider.style.transform = `translateX(${
        (-currentIndex - 1) *
        (Number(slides[0].getBoundingClientRect().width.toFixed(3)) + 20)
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
      if (currentIndex === slides.length) return;
      currentIndex++;
      carouselTask(currentIndex);
    };

    const setupCarousel = () => {
      slider.append(slides[0].cloneNode(true));
      slider.append(slides[1].cloneNode(true));
      slider.append(slides[2].cloneNode(true));
      slider.append(slides[3].cloneNode(true));

      slider.prepend(slides[slides.length - 1].cloneNode(true));
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
        if (currentIndex === slides.length) {
          currentIndex = 0;
          carouselTask(currentIndex, 0);
        }

        if (currentIndex === -1) {
          currentIndex = slides.length - 1;
          carouselTask(currentIndex, 0);
        }
      });
    };

    const setupCarouselDrag = () => {
      const sensor = document.querySelector(".rental_content_arrows");
      // const myCarousel = slider.closest(".myCarousel");
      let pressed = false;
      let startX;
      let distance;

      ["touchstart"].forEach((event) =>
        sensor.addEventListener(event, (e) => {
          pressed = true;
          startX = e.touches[0].clientX;
        })
      );

      ["touchend"].forEach((event) =>
        sensor.addEventListener(event, () => {
          pressed = false;

          if (Math.abs(distance) < 15) {
            distance = null;
            return carouselTask(currentIndex);
          }

          if (distance >= 15) {
            distance = null;
            if (currentIndex === -1) return;

            currentIndex--;
            return carouselTask(currentIndex);
          }

          if (distance <= 15) {
            distance = null;
            if (currentIndex === slides.length) return;

            currentIndex++;
            return carouselTask(currentIndex);
          }
        })
      );

      ["touchmove"].forEach((event) =>
        sensor.addEventListener(event, (e) => {
          if (!pressed || currentIndex === slides.length || currentIndex === -1)
            return;

          distance = e.touches[0].clientX - startX;

          slider.style.transform = `translateX(${
            (-currentIndex - 1) *
              (Number(slides[0].getBoundingClientRect().width.toFixed(3)) +
                20) -
            (distance > 0 ? -60 : 60)
          }px)`;
        })
      );
    };

    setupCarousel();
    setupCarouselArrows();
    setupInfiniteCarousel();
    setupCarouselDrag();
  }

  init() {
    this.createRentalCarousel();
  }
}

export default new RentalView();
