const main = document.getElementById("main");
const day = document.getElementById("day-w");
const dayOfMonth = document.getElementById("day-m");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Analog elements
const anaS = document.getElementById("ana-s");
const anaM = document.getElementById("ana-m");
const anaH = document.getElementById("ana-h");

// Digital elements
const digitH = document.getElementById("digit-h");
const digitM = document.getElementById("digit-m");
const digitS = document.getElementById("digit-s");

// Days and months
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Current date state
let currentDate = new Date();

// format & am-pm
let flagFormat = 0;
let format = false;
document.getElementById("format").addEventListener("click", () => {
  if (flagFormat % 2 == 0) {
    document.getElementById("format").style.color = "green";
    const timePersian = new Date().toLocaleTimeString("fa-IR");
    const datePersian = new Intl.DateTimeFormat("fa-IR");
    format = true;
    setDate(currentDate);
  } else {
    document.getElementById("format").style.color = "#454545";
    format = false;
    setDate(currentDate);
  }

  flagFormat++;
});
let flagAmPm = 0;
let ampm = false;
document.getElementById("ampm").addEventListener("click", () => {
  if (flagAmPm % 2 == 0) {
    document.getElementById("ampm").style.color = "green";
    ampm = true;
  } else {
    document.getElementById("ampm").style.color = "#454545";
    ampm = false;
  }
  flagAmPm++;
});

// Helper function to set rotation
function setRotation(element, baseAngle, rotationRatio) {
  const rotation = baseAngle + rotationRatio * 360;
  element.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
}

// Update clock
function setClockTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  // Set background color
  main.style.backgroundColor =
    hour < 6
      ? "#03346E"
      : hour < 12
      ? "#6EACDA"
      : hour < 18
      ? "#E2E2B6"
      : "#021526";

  // Analog clock rotation
  setRotation(anaS, 180, second / 60);
  setRotation(anaM, 180, (minute + second / 60) / 60);
  setRotation(anaH, 180, (hour % 12) / 12 + minute / 720);

  // Digital clock
  if (ampm) {
    let hourAmPm = hour >= 12 ? `0${hour % 12}` : `0${hour}`;
    let minuteAmPm = minute < 9 ? `0${minute}` : minute;
    let amPm = hour > 12 ? "pm" : "am";
    digitH.innerText = hourAmPm;
    digitM.innerText = minuteAmPm;
    digitS.innerText = amPm;
  } else {
    digitH.innerText = hour.toString().padStart(2, "0");
    digitM.innerText = minute.toString().padStart(2, "0");
    digitS.innerText = second.toString().padStart(2, "0");
  }
}

// Update date
function setDate(date) {
  if (format) {
    const datePersian = new Intl.DateTimeFormat("fa-IR");
    day.innerText = datePersian.format(date);
    dayOfMonth.innerText = "";
    month.innerText = "";
    year.innerText = "";
  } else {
    day.innerText = `${days[date.getDay()]}`;
    dayOfMonth.innerText = `${date.getDate()}- `;
    month.innerText = `${months[date.getMonth()]}- `;
    year.innerText = `${date.getFullYear()}-`;
  }
}

// Change date
function changeDate(direction) {
  currentDate.setDate(currentDate.getDate() + direction);
  setDate(currentDate);
}

// Initial setup
setDate(currentDate);
setClockTime();
setInterval(setClockTime, 1000);
