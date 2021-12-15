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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let deadlineDate = new Date(2021, 11, 16, 8, 0, 0);
// console.log(deadlineDate);

const year = deadlineDate.getFullYear();
const month = months[deadlineDate.getMonth()];
const date = deadlineDate.getDate();
const hours = deadlineDate.getHours();
const minutes = deadlineDate.getMinutes();
const day = weekdays[deadlineDate.getDay()];

giveaway.textContent = `giveaway ends on ${day}, ${month} ${date} ${year}, ${hours}:${minutes}am`;
