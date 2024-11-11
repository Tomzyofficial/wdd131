const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
      input.value = '';
    })
  } else {
    input.focus();
    console.log('Input your favorite scripture');
  }

})

input.focus();