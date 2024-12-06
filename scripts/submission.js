// form submission
document.addEventListener("DOMContentLoaded", () => {
  let localStoredKey = "Review counter";
  let storedKey = localStorage.getItem(localStoredKey);
  let res = storedKey ? parseInt(storedKey, 10) : 0;
  res++;
  localStorage.setItem(localStoredKey, res);
  const msg = document.querySelector("#counter");

  // check if review is greater than 1 add "s";
  if (res == 1) {
    msg.innerHTML = `Congratulation! you have submitted ${res} review`;
  } else {
    msg.innerHTML = `Congratulation! you have submitted ${res} reviews`;
  }

})