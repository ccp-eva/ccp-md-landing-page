mdc.ripple.MDCRipple.attachTo(document.getElementById("confirm-btn"));

const button = document.getElementById("confirm-btn");
const checkbox = document.getElementById("confirm-checkbox");

const handleChecked = () => {
  button.disabled = !checkbox.checked;
};

document
  .querySelector(".mdc-checkbox")
  .addEventListener("click", handleChecked);

// get and store prolific id
const prolificID = new URL(document.location.href).searchParams.get(
  "PROLIFIC_PID"
);

// remove ID from URL
window.history.replaceState({}, document.title, "/src/index.html");

// attach it to the button & add a unix timestamp
button.setAttribute(
  "onclick",
  `location.href='/src/webcam.html?PROLIFIC_PID=${prolificID}&time=${Date.now()}'`
);
