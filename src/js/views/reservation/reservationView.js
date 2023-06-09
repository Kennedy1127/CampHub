class ReservationView {
  renderRoomData(handler) {
    const roomData = handler();

    const landing = document.querySelector(".landing");
    const reserveIntroHeaderTitle = document.querySelector(
      ".reserve_intro_header_title"
    );
    const reserveIntroContentFeatures = document.querySelector(
      ".reserve_intro_content_features"
    );
    const reservePaymentHeaderPrice = document.querySelector(
      ".reserve_payment_header_price"
    );

    roomData.imgs.forEach((img, i) => {
      const html = `
      <div class="landing_pic landing_pic--${i + 1}">
        <picture>
            <source
              media="min-width:1000px"
              srcset="
                ${img.pic}
              "
            />
            <source
              media="min-width:300px"
              srcset="
              ${img.picMobile}
              "
            />
            <img
              src=" ${img.pic}"
              alt="room-1-1"
            />
          </picture>
     </div>`;

      landing.insertAdjacentHTML("beforeend", html);
    });

    roomData.features.forEach((feature) => {
      const html = `
        <div class="reserve_intro_content_feature">
          <div class="reserve_intro_content_feature_icon">
            <img
              src="${feature.icon}"
              alt="${feature.alt}"
            />
          </div>
          <span class="reserve_intro_content_feature_text">
            ${feature.text}
          </span>
        </div>
      `;

      reserveIntroContentFeatures.insertAdjacentHTML("beforeend", html);
    });

    reserveIntroHeaderTitle.textContent = roomData.title;
    reservePaymentHeaderPrice.innerHTML = `$${roomData.price} <span>/ night</span>`;
  }
}

export default new ReservationView();
