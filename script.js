function getFormvalue(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const form = document.forms[0];
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  alert(`${firstName} ${lastName}`);
}

// Attach the function to form submission
window.onload = function () {
  document.forms[0].addEventListener("submit", getFormvalue);
};
