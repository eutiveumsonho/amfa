const aboutBttn = document.getElementById("about-bttn");

const writeBttn = document.getElementById("write-bttn");

function handleEvent(button, detail) {
  const event = new CustomEvent("modal-click", {
    detail,
    bubbles: true,
    cancelable: false,
    composed: true,
  });

  button.dispatchEvent(event);
}

document.addEventListener("modal-click", function (event) {
  const modal = document.querySelector("modal-component");
  const iframe = document.getElementById("my-iframe");

  if (event.detail === "sobre") {
    modal.style.display = "block";
    iframe.src = "../sobre.html";
  }
  if (event.detail === "form") {
    modal.style.display = "block";
    iframe.src = "../form.html";
  }
});

aboutBttn.onclick = function () {
  handleEvent(aboutBttn, "sobre");
};

writeBttn.onclick = function () {
  handleEvent(writeBttn, "form");
};
