import navigationView from "../../views/navigationView.js";
import reservationView from "../../views/reservation/reservationView.js";
import rentalView from "../../views/reservation/rentalView.js";

const init = () => {
  navigationView.init();
  reservationView.init();
  rentalView.init();
};
init();
