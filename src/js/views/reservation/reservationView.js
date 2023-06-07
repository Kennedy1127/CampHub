import { calendarInit } from "../../utilities/calendar.js";

class ReservationView {
  constructor() {
    this._checkInYear = new Date().getFullYear();
    this._checkInMonth = new Date().getMonth() + 1;
    this._checkInDate = new Date().getDate();
    this._checkOutYear = new Date().getFullYear();
    this._checkOutMonth = new Date().getMonth() + 1;
    this._checkOutDate = new Date().getDate();
    this._guests = 1;
    this._price = 99.99;
    this._subtotal = null;
  }

  _renderReservePaymentDate(check, year, month, date) {
    const el = document.querySelector(check);
    el.textContent = `${month}/${date}/${year}`;
  }

  _changeGuests() {
    document
      .querySelector(".reserve_payment_content_order_guest")
      .addEventListener("change", (e) => {
        this._guests = e.target.value;
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
      }
    });
  }

  _renderReservePaymentPrice(days) {
    const reserveName = document.querySelector(
      ".reserve_payment_content_price_item_name"
    );

    const reservePrice = document.querySelector(
      ".reserve_payment_content_price_item_subtotal"
    );

    const reserveTaxes = document.querySelector(
      ".reserve_payment_content_price_subtotal_text"
    );

    const reserveTotal = document.querySelector(
      ".reserve_payment_content_price_subtotal_price"
    );

    reserveTaxes.innerHTML = "Subtotal before taxes:";
    reserveName.innerHTML = `$${this._price} x ${days} nights x ${this._guests} persons`;
    reserveTotal.innerHTML = reservePrice.innerHTML = `$${(this._price *
      days *
      this._guests ===
    0
      ? this._price * this._guests
      : this._price * days * this._guests
    ).toFixed(2)} USD`;
  }

  _clickSubmitButton() {
    const submitButton = document.querySelector(
      ".reserve_payment_content_submit"
    );

    submitButton.addEventListener("click", () => {
      const days = Math.floor(
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

      this._renderReservePaymentPrice(days);
    });
  }

  init() {
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
    this._clickSubmitButton();
  }
}

export default new ReservationView();
