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

let deadlineDate = new Date(2021, 11, 15, 18, 4, 0);
// console.log(deadlineDate);

const year = deadlineDate.getFullYear();
const month = months[deadlineDate.getMonth()];
const date = deadlineDate.getDate();
const hours = deadlineDate.getHours();
const minutes = deadlineDate.getMinutes();
const day = weekdays[deadlineDate.getDay()];

giveaway.textContent = `giveaway ends on ${day}, ${month} ${date} ${year}, ${hours}:${minutes}`;

function format(item) {
  if (item < 10) {
    item = `0${item}`;
  }
  return item;
}

// Function to calculate difference between current date and deadline date
function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = deadlineDate - today;

  // console.log(t);

  // ms in a day
  const oneDay = 24 * 60 * 60 * 1000;
  // ms in an hour
  const oneHour = 60 * 60 * 1000;
  // ms in a minute
  const oneMinute = 60 * 1000;

  // Remaining days
  let daysLeft = Math.floor(t / oneDay);
  // Remaining hours
  let hoursLeft = Math.floor((t % oneDay) / oneHour);
  // Remaining minutes
  let minsLeft = Math.floor((t % oneHour) / oneMinute);
  // Remaining seconds
  let secsLeft = Math.floor((t % oneMinute) / 1000);

  // Putting these values in an array
  const values = [daysLeft, hoursLeft, minsLeft, secsLeft];

  // Putting values
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(count);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// count down
let count = setInterval(getRemainingTime, 1000);
getRemainingTime();
