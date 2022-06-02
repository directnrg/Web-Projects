


const form = document.querySelector(".top-banner form");
const formGeo = document.getElementById("formGeoLoc");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
//const list_geo = document.querySelector(".ajax-weather-geo .cities_geo");
const apiKey = "299afb200bead9d9396ca95234d219ad";
const googleApiKey = "AIzaSyDhlPqYmwv_28R9KW74yLjtGpDXfQ9BEnQ";

/* SECTION location typed by user */
form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      //athens,gr
      if (inputVal.includes(",")) {
        //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        //athens
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${filteredArray[0].querySelector(".city-name span").textContent
        } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  //ajax
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
        }@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
      <button class="remove" onclick="deleteItem()">x</button>
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${weather[0]["description"]
        }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })

    .catch(() => {
      msg.textContent = "Invalid city. Try again 🤠";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});

//remove list li from ul cities

function deleteItem() {
  if (list.childElementCount > 0) {
    {
      var deleteShownItems = document.querySelectorAll(".remove");
      for (var i = 0; i <= deleteShownItems.length; i++) {

        list.removeChild(list.children[i]);
        if (list.children[i] == null)
          i = 0;
        break;
      }
    }
  }
}

var script = document.createElement("script");
script.type = "text/javascript";
script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initMap&libraries=&v=weekly`;
script.async = true;

window.initMap = function () {
  // JS API is loaded and available
};
// Append the 'script' element to 'head'
document.head.appendChild(script);

/* 
 
  waitForUser = setTimeout(fail, 10000);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(createDirections, fail, { timeout: 10000 });
  } else {
    fail();
  }
}
 
function createDirections(position) {
  clearTimeout(waitForUser);
  var currPosLat = position.coords.latitude;
  var currPosLng = position.coords.longitude;
  var pos = { currPosLat, currPosLng };
  var mapOptions = {
    center: pos,
    zoom: 10
  };
  var map = new.google.maps.Map(document.getElementById("map"), mapOptions);
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
  });
}
 
function fail() {
  document.getElementById("map").innerHTML = "Unable to access your current location";
 
};
 */

/* SECTION map with current location of user*/
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: crd.latitude, lng: crd.longitude },
    zoom: 8,
  });
}
//web localization user
let crd;

function getLocation() {
  var x = document.getElementById("userLoc");
  var options = {
    timeout: 10000,
    maximunAge: 0
  };
  function success(pos) {
    crd = pos.coords;
    x.innerHTML = 'Your current possition is: <br>'
      + `Latitude : ${crd.latitude}<br>`
      + `Longitude : ${crd.longitude}<br>`
      + `More or less : ${crd.accuracy} meters`;
  }

  function error(err) {
    x.innerHTML = `ERROR (${err.code}):${err.message}`;
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}



