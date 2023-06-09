import * as model from "../../model/model.js";
import navigationView from "../../views/navigationView.js";
import reservationView from "../../views/reservation/reservationView.js";
import reserveView from "../../views/reservation/reserveView.js";
import rentalView from "../../views/reservation/rentalView.js";

const controllLoadSessionRoomTarget = () => {
  return model.loadSessionRoom();
};

const init = () => {
  navigationView.init();
  reservationView.renderRoomData(controllLoadSessionRoomTarget);
  reserveView.init(controllLoadSessionRoomTarget);
  rentalView.init();
};

window.addEventListener("load", init);
