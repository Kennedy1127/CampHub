import * as model from "./../../model/model.js";
import navigationView from "./../../views/navigationView.js";
import membershipNavigationView from "../../views/membership/membershipNavigationView.js";
import membershipOverlayView from "../../views/membership/membershipOverlayView.js";
import membershipBookingsView from "../../views/membership/membershipBookingsView.js";

const controlLoadUserOrders = () => {
  return model.loadUserOrders();
};

const init = () => {
  navigationView.init();
  membershipNavigationView.init();
  membershipOverlayView.init();
  membershipBookingsView.init(controlLoadUserOrders());
};
init();
