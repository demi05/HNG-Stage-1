const currentDay = document.querySelector("#day");
const currentTime = document.querySelector("#utc-time");

function updateTime() {
  let currentDate = new Date();
  let currentUTCTime = currentDate.toUTCString();

  //get utc day
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let myCurrentDay = dayNames[currentDate.getUTCDay()];

  //get utc time
  currentTime.textContent = `${currentUTCTime.slice(-13, -4)}`;
  currentDay.textContent = `${myCurrentDay}`;
}

setInterval(updateTime, 1000); //updates the time every second
