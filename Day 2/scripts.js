// Make variable
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // select all in classes

let currentActive = 1;

// We add listener to id next so if clicked its increment currentActive by 1
next.addEventListener("click", () => {
  currentActive++;
  // And if currentActive is greater than its length it will stop
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// We set too to id prev to substract currentActive value
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// Make a function to update states
function update() {
  // Loop through DOM Circle with class and id parameter
  circles.forEach((circle, idx) => {
    // If the current id is less than currentActive then add the class active to it
    if (idx < currentActive) {
      circle.classList.add("active");
      // Else, remove the class active
    } else {
      circle.classList.remove("active");
    }
  });

  // Make variable to select all with class active
  const actives = document.querySelectorAll(".active");

  // Calculate the width property in progress
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Condition to button, boolean states
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
