class RecommendationsView {
  _recommendCards = document.querySelectorAll(".recommend_card");
  _recommendIntroOrders = document.querySelectorAll(".recommend_intro_order");

  _addActiveIntroOrder() {
    this._recommendCards.forEach((card, i) =>
      card.classList.contains("recommend_card--active")
        ? this._recommendIntroOrders[i].classList.add(
            "recommend_intro_order--active"
          )
        : ""
    );
  }

  _removeActiveIntroOrder() {
    this._recommendIntroOrders.forEach((order) =>
      order.classList.contains("recommend_intro_order--active")
        ? order.classList.remove("recommend_intro_order--active")
        : ""
    );
  }

  _removeActiveCard() {
    this._recommendCards.forEach((card) =>
      card.classList.contains("recommend_card--active")
        ? card.classList.remove("recommend_card--active")
        : ""
    );
  }

  _recommendCardObservation() {
    this._recommendCards.forEach((card) => {
      const option = {
        root: null,
        threshold: 0.6,
      };

      const callback = (entries, _) => {
        if (!entries[0].isIntersecting) return;
        this._removeActiveCard();
        entries[0].target.classList.add("recommend_card--active");
        this._removeActiveIntroOrder();
        this._addActiveIntroOrder();
      };

      const observer = new IntersectionObserver(callback, option);
      observer.observe(card);
    });
  }

  _clickOrderCardScroll() {
    this._recommendIntroOrders.forEach((order, i) =>
      order.addEventListener("click", () => {
        this._recommendCards[i].scrollIntoView({ behavior: "smooth" });
      })
    );
  }

  init() {
    this._recommendCardObservation();
    this._clickOrderCardScroll();
  }
}

export default new RecommendationsView();
