//country card click and dropdown
function countrydropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//scroll to top
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

export { countrydropdown, scrollFunction, topFunction };
