 // Add delete trip button
function  deleteTrip(event) {
  event.preventDefault();
  
document.querySelector(".showEntry").style.display = "none";
location.reload();
return force;
}

  
// Add scroll to top button
  const mybutton = document.getElementById("myBtn");
  
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // For Safari
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // For Chrome, Firefox, IE and Opera
  }


  export {deleteTrip,
    scrollFunction,
    topFunction,
    }  