class MembershipBookingsView {
  _renderBookings(data) {
    const membershipBookings = document.querySelector(".membership_bookings");
    const imgLinksUpperValley = [
      {
        pic: "./../../src/img/campgrounds/rooms/room-1/room-1-1-min.jpg",
        picMobile: "./../../src/img/campgrounds/rooms/room-1/room-1-1-min.webp",
      },
      {
        pic: "./../../src/img/campgrounds/rooms/room-1/room-1-2-min.jpg",
        picMobile: "./../../src/img/campgrounds/rooms/room-1/room-1-2-min.webp",
      },
      {
        pic: "./../../src/img/campgrounds/rooms/room-1/room-1-3-min.jpg",
        picMobile: "./../../src/img/campgrounds/rooms/room-1/room-1-3-min.webp",
      },
      {
        pic: "./../../src/img/campgrounds/rooms/room-1/room-1-4-min.jpg",
        picMobile: "./../../src/img/campgrounds/rooms/room-1/room-1-4-min.webp",
      },
      {
        pic: "./../../src/img/campgrounds/rooms/room-1/room-1-5-min.jpg",
        picMobile: "./../../src/img/campgrounds/rooms/room-1/room-1-5-min.webp",
      },
    ];

    const generateLink = (id) => [
      {
        pic: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-1-min.jpg`,
        picMobile: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-1-min.webp`,
      },
      {
        pic: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-2-min.jpg`,
        picMobile: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-2-min.webp`,
      },
      {
        pic: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-3-min.jpg`,
        picMobile: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-3-min.webp`,
      },
      {
        pic: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-4-min.jpg`,
        picMobile: `./../../src/img/campgrounds/rooms/room-${
          id === "Upper Valley" ? "1" : "2"
        }/room-${id === "Upper Valley" ? "1" : "2"}-4-min.webp`,
      },
    ];

    data.forEach((obj) => {
      console.log(obj);
      const links = generateLink(obj.reservationOrderRoom.id);
      let bookingPicHtml = "";
      links.forEach((link) => {
        bookingPicHtml += `
        <div class="membership_booking_pic">
          <picture>
            <source
              media="min-width:1000px"
              srcset="
                ${link.pic}
              "
            />
            <source
              media="min-width:300px"
              srcset="
              ${link.picMobile}
              "
            />
            <img
              src="${link.pic}"
            />
          </picture>
        </div>
        `;
      });

      let membershipBookingInfoProduct = "";

      const bookingHtml = `
        <div class="membership_booking">
          <div class="membership_booking_gallery">
            ${bookingPicHtml}
          </div>
          <div class="membership_booking_info">
            <h2 class="membership_booking_info_title">${
              obj.reservationOrderRoom.id
            }</h2>

            <div class="membership_booking_info_group">
              <div class="membership_booking_info_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>${obj.reservationOrderRoom.checkInDate} - </span>
                <span>${obj.reservationOrderRoom.checkOutDate}</span>
              </div>

              <div class="membership_booking_info_guests">
                <i class="fa-solid fa-user"></i>
                <span>${obj.reservationOrderRoom.guests} person${
        obj.reservationOrderRoom.guests > 1 ? "s" : ""
      }</span>
              </div>
            </div>

            <div class="membership_booking_info_product">
              <div class="membership_booking_info_product_title">
                <div class="membership_booking_info_product_pic">
                  <img
                    src="${links[0].picMobile}"
                    alt=""
                  />
                </div>
                <div class="membership_booking_info_product_name">
                ${obj.reservationOrderRoom.title}
                </div>
              </div>
              <div class="membership_booking_info_product_price">
                $${obj.reservationOrderRoom.subtotal.toFixed(2)} USD
              </div>
            </div>

            <div class="membership_booking_info_rental">
              <h2 class="membership_booking_info_rental_title">
                Rental Gear
              </h2>

              <div class="membership_booking_info_products">
                <div class="membership_booking_info_product">
                  <div class="membership_booking_info_product_title">
                    <div class="membership_booking_info_product_pic">
                      <img
                        src="./../../src/img/campgrounds/rental/rental-tent-min.png"
                        alt=""
                      />
                    </div>
                    <div class="membership_booking_info_product_name">
                      UNP-300 Camping Dome Tent x3
                    </div>
                  </div>
                  <div class="membership_booking_info_product_price">
                    $108.85
                  </div>
                </div>

                <div class="membership_booking_info_product">
                  <div class="membership_booking_info_product_title">
                    <div class="membership_booking_info_product_pic">
                      <img
                        src="./../../src/img/campgrounds/rental/rental-sleepingbag-min.png"
                        alt=""
                      />
                    </div>
                    <div class="membership_booking_info_product_name">
                      VENTURE 4 Lightweight Sleeping Bag x3
                    </div>
                  </div>
                  <div class="membership_booking_info_product_price">
                    $74.85
                  </div>
                </div>
              </div>
            </div>

            <div class="membership_booking_info_total">
              <span>Subtotal: $${obj.subtotal.toFixed(2)} USD</span>
            </div>

            <div class="membership_booking_info_comment">
              <button class="membership_booking_info_comment_button">
                <i class="fa-regular fa-comment-dots"></i>
                Comment
              </button>
            </div>
          </div>
        </div>
      `;

      membershipBookings.insertAdjacentHTML("beforeend", bookingHtml);
    });
  }

  init(data) {
    this._renderBookings(data);
  }
}

export default new MembershipBookingsView();
