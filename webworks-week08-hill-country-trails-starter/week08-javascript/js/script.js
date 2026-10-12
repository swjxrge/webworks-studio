"use strict";

// PART 1 — DIFFICULTY DISCLOSURE
const difficultyButton = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

// Native buttons support mouse clicks, Enter, and Space.
difficultyButton.addEventListener("click", function () {
  const isOpen = !difficultyPanel.hidden;
  difficultyPanel.hidden = isOpen;
  difficultyButton.setAttribute("aria-expanded", String(!isOpen));
});

// PART 2 — HIKE PLANNING FORM
const hikeForm = document.querySelector("#hike-form");
const formFeedback = document.querySelector("#form-feedback");
const trailSelect = document.querySelector("#trail");
const experienceSelect = document.querySelector("#experience");
const hoursSelect = document.querySelector("#hours");

function clearFeedback() {
  formFeedback.textContent = "";
}

// Clear the previous review when selections change or validation fails.
hikeForm.addEventListener("change", clearFeedback);
// Invalid events do not bubble, so capture them from the required fields.
hikeForm.addEventListener("invalid", clearFeedback, true);

// The browser checks required fields before firing a normal submit event.
hikeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const trail = trailSelect.value;
  const experience = experienceSelect.value;
  const availableTime = hoursSelect.selectedOptions[0].textContent;

  // Plain text updates the starter's polite live region safely.
  formFeedback.textContent =
    `Your hike plan is ready to review! Trail: ${trail}. ` +
    `Hiking experience: ${experience}. Time available: ${availableTime}. ` +
    "Check the trail's estimated time, current weather, trail conditions, " +
    "and official park information before leaving. " +
    "This classroom demo does not save or send your plan.";
});
