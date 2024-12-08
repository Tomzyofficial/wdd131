// form submission
document.addEventListener("DOMContentLoaded", () => {
  let storedKey = localStorage.getItem("Review counter");
  let counter = storedKey ? parseInt(storedKey, 10) : 0;
  counter++;
  localStorage.setItem("Review counter", counter);
  const msg = document.querySelector("#counter-msg");
  msg.innerHTML = `Congratulation! your review is ${counter} total`;

})
