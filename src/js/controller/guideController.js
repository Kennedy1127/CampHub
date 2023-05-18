import navigationView from "../views/navigationView.js";
import stepView from "../views/guide/stepView.js";

const init = () => {
  navigationView.init();
  stepView.setupStepHeaders();
};
init();
