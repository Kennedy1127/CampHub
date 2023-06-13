class MembershipOverlayView {
  constructor() {
    this._selectStars = false;
    this._rates = 0;
  }
  _body = document.querySelector("body");

  _showOverlay() {
    window.addEventListener("click", (e) => {
      const button = e.target.closest(
        ".membership_booking_info_comment_button"
      );
      if (!button) return;
      const { id } = button.closest(".membership_booking").dataset;
      const membership = document.querySelector(".membership");

      const overlayHtml = `
        <div class="membership_overlay membership_overlay--active">
          <div class="membership_overlay_card">
            <div class="membership_overlay_card_header_banner">${id}</div>
            <div class="membership_overlay_card_cancel">
              <i class="fa-solid fa-xmark"></i>
            </div>

            <div class="membership_overlay_card_header">
              <div class="membership_overlay_card_user-pic">U</div>
              <div class="membership_overlay_card_user-name">USER001</div>
              <div class="membership_overlay_card_rate">
                <i class="fa-solid fa-star" data-star-id=1></i>
                <i class="fa-solid fa-star" data-star-id=2></i>
                <i class="fa-solid fa-star" data-star-id=3></i>
                <i class="fa-solid fa-star" data-star-id=4></i>
                <i class="fa-solid fa-star" data-star-id=5></i>
              </div>
            </div>

            <div class="membership_overlay_card_content">
              <div class="membership_overlay_card_textarea">
                <textarea></textarea>
              </div>
            </div>

            <div class="membership_overlay_submit">
              <button class="membership_overlay_submit_button">Submit</button>
            </div>
          </div>
        </div>
      `;

      membership.insertAdjacentHTML("beforeend", overlayHtml);
      this._body.classList.add("no-scroll");
    });
  }

  _hiddenOverlay() {
    window.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("membership_overlay") &&
        !e.target.classList.contains("fa-xmark")
      )
        return;

      const membershipOverlay = document.querySelector(".membership_overlay");
      membershipOverlay.remove();
      this._body.classList.remove("no-scroll");
    });
  }

  _setupRating() {
    window.addEventListener("mouseover", (e) => {
      if (!e.target.classList.contains("fa-star") || this._selectStars) return;
      const { starId } = e.target.dataset;

      const stars = document.querySelectorAll(
        ".membership_overlay_card_rate .fa-star"
      );
      stars.forEach((star) => star.classList.remove("active"));
      for (let i = 0; i < Number(starId); i++) {
        stars[i].classList.add("active");
      }
    });

    window.addEventListener("mouseover", (e) => {
      if (
        e.target.closest(".membership_overlay_card_rate") ||
        this._selectStars
      )
        return;

      const stars = document.querySelectorAll(
        ".membership_overlay_card_rate .fa-star"
      );
      stars.forEach((star) => star.classList.remove("active"));
    });

    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("fa-star")) return;
      const { starId } = e.target.dataset;
      const stars = document.querySelectorAll(
        ".membership_overlay_card_rate .fa-star"
      );

      stars.forEach((star) => star.classList.remove("active"));
      if (this._rates === Number(starId)) {
        this._selectStars = false;
        this._rates = 0;
        return;
      }

      this._selectStars = true;
      this._rates = Number(starId);

      for (let i = 0; i < Number(starId); i++) {
        stars[i].classList.add("active");
      }
    });
  }

  _setupSubmitComment() {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("membership_overlay_submit_button"))
        return;

      const textarea = document.querySelector(
        ".membership_overlay_card_textarea textarea"
      );

      const obj = {
        userName: "USER001",
        userIcon: "default",
        text: textarea.value,
        date: `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`,
        rates: this._rates || 0,
      };

      console.log(obj);
    });
  }

  init() {
    this._showOverlay();
    this._hiddenOverlay();
    this._setupRating();
    this._setupSubmitComment();
  }
}

export default new MembershipOverlayView();
