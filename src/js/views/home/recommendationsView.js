class RecommendationsView {
  _darwCurtains() {
    const sectionRecommend = document.querySelector(".section-recommend");

    const callback = (entries, _) => {
      if (!entries[0].isIntersecting) return;
      const borders = document.querySelectorAll(".recommend_background-border");
      borders[0].classList.add("recommend_background-border--left--draw");
      borders[1].classList.add("recommend_background-border--right--draw");
    };

    const option = {
      root: null,
      rootMargin: "-150px",
      // rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, option);
    observer.observe(sectionRecommend);
  }

  _removeOverflowClipOnBorders() {
    const sectionRecommend = document.querySelector(".section-recommend");
    const sectionTourism = document.querySelector(".section-tourism");

    const callback = (entries, _) => {
      if (!entries[0].isIntersecting) return;
      sectionRecommend.style.overflowY = "initial";
    };
    const option = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, option);
    observer.observe(sectionTourism);
  }

  _changeBordersIndex() {
    const firstRecommendCard = document.querySelector(".recommend_card");

    const callback = (entries, _) => {
      if (!entries[0].isIntersecting) return;

      const stickyBorders = document.querySelectorAll(
        ".recommend_background-borders"
      );

      stickyBorders.forEach((border) => {
        border.style.zIndex = "1";
      });
    };
    const option = {
      root: null,
      threshold: 1,
    };

    const observer = new IntersectionObserver(callback, option);
    observer.observe(firstRecommendCard);
  }

  _setupCarAnimation() {
    const sectionRecommend = document.querySelector(".section-recommend");
    const sectionRooms = document.querySelector(".section-rooms");
    const tourismGallery = document.querySelector(".tourism_gallery");
    const backgroundCar = document.querySelector(".recommend_background-car");

    const addCar = (entries, _) => {
      if (!entries[0].isIntersecting) return;
      backgroundCar.classList.add("recommend_background-car--active");
    };
    const option = {
      root: null,
      rootMargin: "-25%",
      threshold: 0,
    };

    const recommendObserver = new IntersectionObserver(addCar, option);
    recommendObserver.observe(sectionRecommend);

    const removeCar = (entries, _) => {
      if (!entries[0].isIntersecting) return;
      backgroundCar.classList.remove("recommend_background-car--active");
    };

    const sectionRoomsObserver = new IntersectionObserver(removeCar, {
      threshold: 0.3,
    });
    sectionRoomsObserver.observe(sectionRooms);

    const galleryObserver = new IntersectionObserver(removeCar);
    galleryObserver.observe(tourismGallery);
  }

  init() {
    // this._recommendCardObservation();
    // this._clickOrderCardScroll();
    this._darwCurtains();
    this._removeOverflowClipOnBorders();
    this._setupCarAnimation();
  }
}

export default new RecommendationsView();
