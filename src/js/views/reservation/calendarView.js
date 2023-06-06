import { calendarInit } from "./../../utilities/calendar.js";

class CalendarView {
  _createCalendar() {
    calendarInit();
  }

  init() {
    this._createCalendar();
  }
}

export default new CalendarView();
