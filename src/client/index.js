
import {handleSubmit, renderTripCard } from "./js/formHandler";
import {countrydropdown, deleteTrip, scrollFunction, topFunction } from "./js/clicks";


import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/print.scss";

document.getElementById("saveTrip").addEventListener("click", renderTripCard);
document.getElementById("countrydropdown").addEventListener("click",countrydropdown);
document.getElementById("generate").addEventListener("click", handleSubmit);
document.getElementById("deleteTrip").addEventListener("click", deleteTrip);
document.getElementById("myBtn").addEventListener("click", topFunction)


export { handleSubmit,
         renderTripCard,
         countrydropdown,
         deleteTrip,
         scrollFunction,
         topFunction,
         }  




      


