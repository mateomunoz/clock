const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const hourHandElement = document.getElementById('hour-hand');
const minuteHandElement = document.getElementById('minute-hand');
const secondHandElement = document.getElementById('second-hand');

const rootStyles = document.documentElement.style;

const days = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const updateDigitalClock = (hours, minutes, dayOfWeek, dayNumber, month, currentYear) => {
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  dayOfWeekElement.textContent = days[dayOfWeek];
  dayElement.textContent = dayNumber;
  monthElement.textContent = months[month];
  yearElement.textContent = currentYear;
};

const updateHandsOfClock = (hours, minutes, seconds) => {
  const hoursDegrees = `${hours * 30}deg`;
  const minutesDegrees = `${minutes * 6}deg`;
  const secondsDegrees = `${seconds * 6}deg`;

  rootStyles.setProperty('--hours-hand-rotate', hoursDegrees);
  rootStyles.setProperty('--minutes-hand-rotate', minutesDegrees);
  rootStyles.setProperty('--seconds-hand-rotate', secondsDegrees);
};

const updateClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dayOfWeek = date.getDay();
  const dayNumber = date.getDate();
  const month = date.getMonth();
  const currentYear = date.getFullYear();

  updateHandsOfClock(hours, minutes, seconds);
  updateDigitalClock(hours, minutes, dayOfWeek, dayNumber, month, currentYear);
};

setInterval(updateClock, 1000);
updateClock();
