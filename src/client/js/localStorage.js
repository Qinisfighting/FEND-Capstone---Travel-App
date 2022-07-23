import axios from "axios";

//save trip

async function saveTrip () {

    try {
        const allData = await axios.get('http://localhost:7777/all')
        localStorage.setItem('savedTrip', JSON.stringify(allData));
  }catch(error){
    console.log("localStorage error", error)
}

} 
  
 
  
  //delete trip 
  function  deleteTrip(event) {
    event.preventDefault();
  localStorage.clear() 
  document.querySelector(".showEntry").style.display = "none";
  location.reload();
  return force;
  }
  

  export {
    saveTrip,
    deleteTrip,
    }  