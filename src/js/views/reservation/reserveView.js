import { calendarInit } from "../../utilities/calendar.js";

class ReserveView {
  constructor() {
    this._checkInYear = new Date().getFullYear();
    this._checkInMonth = new Date().getMonth() + 1;
    this._checkInDate = new Date().getDate();
    this._checkOutYear = new Date().getFullYear();
    this._checkOutMonth = new Date().getMonth() + 1;
    this._checkOutDate = new Date().getDate();
    this._roomData = null;
    this._title = "Upper Valley";
    this._guests = 1;
    this._price = 99.99;
    this._subtotal = null;
  }

  _initReservePaymentPrice() {
    const reserveName = document.querySelector(
      ".reserve_payment_content_price_item_name"
    );

    const reservePrice = document.querySelector(
      ".reserve_payment_content_price_item_subtotal"
    );

    const reserveTotal = document.querySelector(
      ".reserve_payment_content_price_subtotal_price"
    );

    reserveName.textContent = `$${this._roomData.price} x 0 nights x 1 person`;
    reservePrice.textContent = `$${this._roomData.price} USD`;
    reserveTotal.textContent = `$${this._roomData.price} USD`;
  }

  _renderReservePaymentDate(check, year, month, date) {
    const el = document.querySelector(check);
    el.textContent = `${month}/${date}/${year}`;
  }

  _calculateDays() {
    return Math.floor(
      (new Date(
        this._checkOutYear,
        this._checkOutMonth - 1,
        this._checkOutDate
      ).getTime() -
        new Date(
          this._checkInYear,
          this._checkInMonth - 1,
          this._checkInDate
        ).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
  }

  _renderReservePaymentPrice(days) {
    const reserveName = document.querySelector(
      ".reserve_payment_content_price_item_name"
    );

    const reservePrice = document.querySelector(
      ".reserve_payment_content_price_item_subtotal"
    );

    const reserveTotal = document.querySelector(
      ".reserve_payment_content_price_subtotal_price"
    );

    const reserveWarnText = document.querySelector(
      ".reserve_payment_content_warning"
    );

    const calculatePrice = () => {
      return this._roomData.price * this._guests * (days < 1 ? 1 : days);
    };

    if (days < 0) {
      reserveWarnText.innerHTML =
        "Please choose correct arrive and depart dates.";
      reserveName.innerHTML = `$99.99 x 0 nights x ${this._guests} person`;
      reserveTotal.innerHTML =
        reservePrice.innerHTML = `${calculatePrice().toFixed(2)} USD`;

      this._subtotal = calculatePrice();
      return;
    }

    reserveWarnText.innerHTML = "";
    reserveName.innerHTML = `$${this._roomData.price} x ${days} nights x ${
      this._guests
    } person${this._guests > 1 ? "s" : ""}`;
    reserveTotal.innerHTML =
      reservePrice.innerHTML = `$${calculatePrice().toFixed(2)} USD`;
    this._subtotal = calculatePrice();
  }

  _changeGuests() {
    document
      .querySelector(".reserve_payment_content_order_guest")
      .addEventListener("change", (e) => {
        this._guests = e.target.value;
        this._renderReservePaymentPrice(this._calculateDays());
      });
  }

  _calendarInit() {
    calendarInit(".checkIn");
    calendarInit(".checkOut");
  }

  _selectCalendarDate(calendar) {
    const calendarBody = document.querySelector(`${calendar} .calendar-body`);

    calendarBody.addEventListener("click", (e) => {
      const clickedDate = e.target.closest(".calendar-enable");

      if (calendar === ".checkIn") {
        this._checkInYear = clickedDate.dataset.year;
        this._checkInMonth = Number(clickedDate.dataset.month) + 1;
        this._checkInDate = clickedDate.dataset.date;
        const check = ".reserve_checkInDate";

        this._renderReservePaymentDate(
          check,
          this._checkInYear,
          this._checkInMonth,
          this._checkInDate
        );
        this._renderReservePaymentPrice(this._calculateDays());
      } else if (calendar === ".checkOut") {
        this._checkOutYear = clickedDate.dataset.year;
        this._checkOutMonth = Number(clickedDate.dataset.month) + 1;
        this._checkOutDate = clickedDate.dataset.date;
        const check = ".reserve_checkOutDate";

        this._renderReservePaymentDate(
          check,
          this._checkOutYear,
          this._checkOutMonth,
          this._checkOutDate
        );
        this._renderReservePaymentPrice(this._calculateDays());
      }
    });
  }

  _showCalendar() {
    const orderDates = document.querySelectorAll(
      ".reserve_payment_content_order_date"
    );
    const calendars = document.querySelectorAll(".reserve_payment_calendar");

    window.addEventListener("click", (e) => {
      calendars.forEach((calendar) =>
        calendar.classList.contains("reserve_payment_calendar--active")
          ? calendar.classList.remove("reserve_payment_calendar--active")
          : ""
      );

      if (e.target.closest(".calendar-enable ")) {
        return;
      }

      const el = e.target.closest(".reserve_payment_content_order_date");
      const index = [...orderDates].indexOf(el);
      if (index === -1) return;

      calendars[index].classList.add("reserve_payment_calendar--active");
    });
  }

  _submitReserveData() {
    const reservePaymentSubmitButton = document.querySelector(
      ".reserve_payment_content_submit"
    );

    const summaryProductsTableBody = document.querySelector(
      ".summary_products_table_body"
    );

    reservePaymentSubmitButton.addEventListener("click", () => {
      const days = this._calculateDays();
      if (days < 0) {
        sessionStorage.clear("reservePaymentData");
        return;
      }

      const title = `${this._roomData.title} - ${
        this._roomData.price
      } x ${days} night${days > 1 ? "s" : ""}`;

      const data = {
        id: this._roomData.title,
        title,
        price: this._roomData.price,
        quantity: this._guests,
        subtotal: this._subtotal.toFixed(2),
      };

      const jsonData = JSON.stringify(data);
      sessionStorage.setItem("reservePaymentData", jsonData);

      const html = `
        <tr>
          <td>
            <div class="summary_product_pic">
              <picture>
                <source
                  media="(min-width:1000px)"
                  srcset="
                    ./../../src/img/campgrounds/rooms/room-1/room-1-2-min.jpg
                  "
                />
                <source
                  media="min-width:300px"
                  srcset="
                    ./../../src/img/campgrounds/rooms/room-1/room-1-2-min.webp
                  "
                />
                <img
                  src="./../../src/img/campgrounds/rooms/room-1/room-1-2-min.jpg"
                  alt=""
                />
              </picture>
            </div>
            <span>Upper Valley - 499.95 USD / 5 nights</span>
          </td>
          <td>
            <span>$499.95</span>
          </td>
          <td>
            <span>3</span>
          </td>
          <td>
            <span>$1499.85</span>
          </td>
          <td>
            <span>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </td>
        </tr>
      `;

      summaryProductsTableBody.insertAdjacentHTML("afterbegin", html);
    });
  }

  init(handler) {
    this._roomData = handler();
    this._subtotal = this._roomData.price;

    this._initReservePaymentPrice();
    this._showCalendar();
    this._renderReservePaymentDate(
      ".reserve_checkInDate",
      this._checkInYear,
      this._checkInMonth,
      this._checkInDate
    );
    this._renderReservePaymentDate(
      ".reserve_checkOutDate",
      this._checkOutYear,
      this._checkOutMonth,
      this._checkOutDate
    );
    this._changeGuests();
    this._calendarInit();
    this._selectCalendarDate(".checkIn");
    this._selectCalendarDate(".checkOut");
    this._submitReserveData();
  }
}

export default new ReserveView();
