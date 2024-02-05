

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

let img = document.getElementById("heart");
let imgX = 0;
let imgY = 0;

let centerX;
let centerY;

let timerId = null;

function startAnimation() {
  if (timerId !== null) {
    clearInterval(timerId);
  }

  // Determine where the user clicked
  let clickX = event.clientX;
  let clickY = event.clientY;

  // Start a timer to move the heart every 10 milliseconds
  timerId = setInterval(function () {
    moveImage(clickX, clickY);
  }, 10);
}

function moveImage(clickX, clickY) {
  // Set the center coordinates if not already set
  if (centerX === undefined || centerY === undefined) {
    centerX = imgX + img.width / 2;
    centerY = imgY + img.height / 2;
  }

  // Calculate the direction to move
  let deltaX = clickX - centerX;
  let deltaY = clickY - centerY;

  // Move the heart 1 pixel in the direction of the click
  imgX += deltaX / 100;
  imgY += deltaY / 100;

  // Update the heart position
  img.style.left = imgX + "px";
  img.style.top = imgY + "px";

  // Check if the heart has reached the target location
  if (Math.round(imgX) === clickX && Math.round(imgY) === clickY) {
    // Stop the timer and reset timerId
    clearInterval(timerId);
    timerId = null;
  }
}

// Add event listener to the whole document to trigger startAnimation() on click
document.addEventListener("click", startAnimation);