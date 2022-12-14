import { DateTime } from './luxon.js';

const date = document.getElementById('date');

const dateTime = () => {
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  setTimeout(dateTime, 1000);
};

export default dateTime;