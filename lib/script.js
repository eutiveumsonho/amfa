const aboutBttn = document.getElementById("about-bttn");
console.log({ aboutBttn });

const writeBttn = document.getElementById("write-bttn");
console.log({ writeBttn });

function handleEvent(button, detail) {
  const event = new CustomEvent("modal-click", {
    detail,
    bubbles: true,
    cancelable: false,
    composed: true,
  });
  console.log("EVENTO MODAL-CLICK");
  button.dispatchEvent(event);
  console.log("Clicou aí ?");
}
//Listen for the event
document.addEventListener("modal-click", function (event) {
  console.log("@@@@@@@@@@@@@@@@@@@@ modal click", event);
  const modal = document.querySelector("modal-component");
  const iframe = document.getElementById("my-iframe");
  console.log({ modal, iframe });

  if (event.detail === "sobre") {
    console.log(event.detail);
    modal.style.display = "block";
    iframe.src = "../sobre.html";
  }
  if (event.detail === "form") {
    modal.style.display = "block";
    iframe.src = "../form.html";
  }
});


aboutBttn.onclick = function () {
  console.log("Opa, clicou sim!");
  handleEvent(aboutBttn, "sobre");
};

writeBttn.onclick = function () {
  console.log("Opa, clicou aqui também!");
  handleEvent(writeBttn, "form");
};
