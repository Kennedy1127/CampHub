import { calendarInit } from "../../utilities/calendar.js";

class ReserveView {
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

    reserveName.textContent = `$${this._price} x 0 nights x 1 person`;
    reservePrice.textContent = `$${this._price} USD`;
    reserveTotal.textContent = `$${this._price} USD`;
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

    if (days < 0) {
      reserveWarnText.innerHTML =
        "Please choose correct arrive and depart dates.";
      reserveName.innerHTML = `$99.99 x 0 nights x ${this._guests} person`;
      reserveTotal.innerHTML = reservePrice.innerHTML = `${(
        this._price * this._guests
      ).toFixed(2)} USD`;
      return;
    }

    reserveWarnText.innerHTML = "";
    reserveName.innerHTML = `$${this._price} x ${days} nights x ${
      this._guests
    } person${this._guests > 1 ? "s" : ""}`;
    reserveTotal.innerHTML = reservePrice.innerHTML = `$${(this._price *
      days *
      this._guests ===
    0
      ? this._price * this._guests
      : this._price * days * this._guests
    ).toFixed(2)} USD`;
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
      const calendars = document.querySelectorAll(".reserve_payment_calendar");

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

  init(handler) {
    this._price = handler().price;

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
  }
}

export default new ReserveView();
