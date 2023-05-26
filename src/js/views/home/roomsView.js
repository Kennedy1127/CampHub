import carousel from "./../../utilities/carousel.js";

class RoomsView {
  _sliders = document.querySelectorAll(".myCarousel_slider");
  _arrows = document.querySelectorAll(".myCarousel_arrows");
  _numbers = document.querySelectorAll(".myCarousel_numbers");

  init() {
    const upperValleyCarousel = new carousel(
      this._sliders[0],
      this._arrows[0],
      this._numbers[0]
    );
    upperValleyCarousel.init();

    const sunsetLodge = new carousel(
      this._sliders[1],
      this._arrows[1],
      this._numbers[1]
    );
    sunsetLodge.init();
  }
}

export default new RoomsView();
