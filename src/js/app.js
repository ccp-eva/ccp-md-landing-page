mdc.ripple.MDCRipple.attachTo(document.querySelector(".foo-button"));
// const checkbox = new MDCCheckbox(document.querySelector(".mdc-checkbox"));
// const formField = new MDCFormField(document.querySelector(".mdc-form-field"));
// formField.input = checkbox;

// const button = document.getElementById("start-btn");
// const handleChecked = () => {
//   button.disabled = true;
//   if (checkbox.checked) {
//     button.disabled = false;
//   }
// };

// document
//   .querySelector(".mdc-checkbox")
//   .addEventListener("click", handleChecked);

// get and store prolific id
const prolificID = new URL(document.location.href).searchParams.get(
  "PROLIFIC_PID"
);

// attach it to the button & add a unix timestamp
// button.setAttribute(
//   "onclick",
//   `location.href='https://ccp-odc.eva.mpg.de/gafo-prolific/experiment.html?PROLIFIC_PID=${prolificID}&time=${Date.now()}'`
// );

// const url = new URL(document.location.href);
// const params = new URLSearchParams(url.search);
// params.set("baz", 3);
// params.toString(); // "foo=1&bar=2&baz=3"
