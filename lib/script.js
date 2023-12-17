

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal2.style.display = "none";
  }
});

// Write letter modal logic ----------------------------------------------

// Get the modal
const modal2 = document.getElementById("form-modal");

// Get the button that opens the modal
const writeBttn = document.getElementById("write-bttn");
const writeModalContent = document.getElementById("form-content");

// Get the <span> element that closes the modal
const writeModalSpan = document.getElementsByClassName("close")[0];
console.log({ modal2, writeBttn, writeModalContent, writeModalSpan });

// When the user clicks on the button, open the modal
writeBttn.onclick = function () {
  writeModalContent.style.display = "block";
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
writeModalSpan.onclick = function () {
  modal2.style.display = "none";
  writeModalContent.style.display = "none";
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal2.style.display = "none";
  }
});

// Logic of form data submission ----------------------------------------------

const form = document.getElementById("form-letter");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);

  console.log({ data });

  fetch("/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      document.getElementById("result").innerHTML = "Carta enviada!";
    })
    .catch(/**/);
});
