const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0; // Use camelCase for consistency
let isRunningTime = false;

function start() {
  if(!isRunningTime) {
    startTime = Date.now() - elapsedTime; // Capture the start time at the beginning
    timer = setInterval(update, 10); // Update every 10 milliseconds
    isRunningTime = true;
  }
}

function stop() {
  if(isRunningTime) {
    clearInterval(timer); // Clear the interval to stop updates
    elapsedTime = Date.now() - startTime; // Update elapsedTime with the final time
    isRunningTime = false;
    //elapsedTime += currentTime - startTime;


  }
}

function reset() {
  clearInterval(timer); // Clear any existing interval
  startTime = 0;
  elapsedTime = 0;
  isRunningTime = false;
  display.textContent = "00:00:00.00"; // Set display to initial value
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime; // Calculate elapsed time

  // Format time components with leading zeros:
  const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, "0");
  const seconds = String(Math.floor(elapsedTime / 1000 % 60)).padStart(2, "0");
  const milliseconds = String(Math.floor(elapsedTime % 1000 / 10)).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}