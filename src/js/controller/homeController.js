import navigationView from "../views/navigationView.js";
import roomsView from "../views/home/roomsView.js";
import recommendationsView from "../views/home/recommendationsView.js";

const init = () => {
  navigationView.clickMenuButton();
  roomsView.init();
  recommendationsView.init();
};
init();
