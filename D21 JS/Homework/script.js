let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function updateClock() {
  let now = new Date();

  let day = now.getDay();
  let month = now.getMonth();
  let date = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let dayName = dayNames[day];
  let monthName = monthNames[month];

  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  let dateText = dayName + ", " + monthName + " " + date + ", " + year;
  let timeText = hours + ":" + minutes + ":" + seconds;

  document.getElementById("date").innerText = dateText;
  document.getElementById("time").innerText = timeText;
  document.getElementById("ampm").innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000);