class NavigationView {
  _menuButton = document.querySelector(".navigation_button");
  _navigationOverlay = document.querySelector(".navigation_overlay");

  _clickMenuButton() {
    this._menuButton.addEventListener("click", () => {
      this._menuButton.classList.toggle("navigation_button--active");
      this._navigationOverlay.classList.toggle("navigation_overlay--show");
    });
  }

  init() {
    this._clickMenuButton();
  }
}

export default new NavigationView();
