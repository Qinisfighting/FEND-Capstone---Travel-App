import { handleSubmit } from "./js/formHandler";
import { countrydropdown, scrollFunction, topFunction } from "./js/subButtons";
import { saveTrip, deleteTrip, showSavedTrip } from "./js/localStorage";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/print.scss";

//saved trips load in the bottom when page reloads
document.addEventListener("DOMContentLoaded", (event) => {
  showSavedTrip();
});

document.getElementById("saveTrip").addEventListener("click", saveTrip);
document
  .getElementById("countrydropdown")
  .addEventListener("click", countrydropdown);
document.getElementById("generate").addEventListener("click", handleSubmit);
document.getElementById("deleteTrip").addEventListener("click", deleteTrip);
document.getElementById("myBtn").addEventListener("click", topFunction);

export {
  handleSubmit,
  saveTrip,
  showSavedTrip,
  countrydropdown,
  deleteTrip,
  scrollFunction,
  topFunction
};
