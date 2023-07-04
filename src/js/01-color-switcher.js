const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const INTERVAL_DELAY = 1000;
btnStart.disabled = false;
btnStop.disabled = true;

const body = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}
btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  console.log(`Call onBtnStartClick every ${INTERVAL_DELAY} ms`);

  timerId = setInterval(updateBackgroundColor, INTERVAL_DELAY);
  btnStart.disabled = true;
  btnStop.disabled = false;
}
btnStop.addEventListener('click', onBtnStopClick);
function onBtnStopClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
  console.log(`Interval has stopped!`);
}
