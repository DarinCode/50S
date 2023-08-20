// Make variabel to select all items in div document
const panels = document.querySelectorAll(".panel");

// Make for loop to each object in panels variable
panels.forEach((panel) => {
  // Add event listener when user click
  panel.addEventListener("click", () => {
    // Run a function to remove active class in all objects
    removeActiveClasses();
    // Then, run the function to add class active to clicked object
    panel.classList.add("active");
  });
});

// Function to remove active class
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
