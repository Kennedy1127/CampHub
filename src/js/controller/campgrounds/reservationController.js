import navigationView from "../../views/navigationView.js";
import calendarView from "../../views/reservation/calendarView.js";
import rentalView from "../../views/reservation/rentalView.js";

const init = () => {
  navigationView.init();
  calendarView.init();
  rentalView.init();
};
init();
