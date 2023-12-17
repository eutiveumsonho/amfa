class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    this.id = "modal-overlay";

    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-container";
    console.log({ modalContainer });

    this.appendChild(modalContainer);

    const modalHeader = document.createElement("div");
    modalHeader.innerHTML = "O QUE É O AMFA?";
    modalHeader.id = "modal-header";

    modalContainer.appendChild(modalHeader);

    const closeButton = document.createElement("span");
    console.log({ closeButton });
    closeButton.id = "close-modal";
    closeButton.innerHTML = "&times;";

    modalHeader.appendChild(closeButton);

    console.log({ modalComponent: this });

    const modalContent = document.getElementById("about-content");
    console.log({ modalContent });

    modalContainer.appendChild(modalContent);

    closeButton.onclick = function () {
      const modal = document.querySelector("modal-component");
      modal.style.display = "none";
      console.log({ closeButton });
    };

    window.onclick = function (event) {
      const modal = document.querySelector("modal-component");
      if (event.target === modal) {
        modal.style.display = "none";
        console.log({ target: event.target });
      }
    };

    document.addEventListener("keydown", function (event) {
      const modal = document.querySelector("modal-component");
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });

    //disclosure-button logic--------------------------
    const aboutButton = document.getElementById("about-bttn");
    console.log({ aboutButton });

    aboutButton.onclick = function () {
      console.log("@@@@@@@@@@@@@@@@@ clicou meu");

      const event = new CustomEvent("modal-click", {
        bubbles: true,
        cancelable: false,
        composed: true,
      });
      console.log("EVENTÃO MEU");
      aboutButton.dispatchEvent(event);
      console.log("CLICOU SIM! MAS VAI DE NOVO ?");
    };

    document.addEventListener("modal-click", function (event) {
      const modal = document.querySelector("modal-component");
      modal.style.display = "block";
    });
  }
}

window.customElements.define("modal-component", Modal);
