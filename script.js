// Selects all <input> elements within the "controls" class
const inputs = document.querySelectorAll(".controls input");

// Function that updates CSS variables based on the inputs value
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Adds event listeners for "change" and "mousemove" that invoke the handleUpdate function
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
