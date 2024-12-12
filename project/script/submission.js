document.addEventListener("DOMContentLoaded", function () {
  // Parse query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);

  // Retrieve individual parameters
  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const country = queryParams.get('country');

  // Display the data on the page
  document.getElementById('displayName').innerHTML = `Your name: ${name}`;
  document.getElementById('displayEmail').innerHTML = `Your email: ${email}`;
  document.getElementById('displayCountry').innerHTML = `Your country: ${country}`;

  // Store data in localStorage
  if (name && email && country) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('country', country);
  }
});