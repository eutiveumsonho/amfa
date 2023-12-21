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
    modalHeader.id = "modal-header";

    modalContainer.appendChild(modalHeader);

    const closeButton = document.createElement("span");
    console.log({ closeButton });
    closeButton.id = "close-modal";
    closeButton.innerHTML = "&times;";

    modalHeader.appendChild(closeButton);

    console.log({ modalComponent: this });

    const iframe = document.createElement("iframe");
    iframe.id = "my-iframe";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameborder = "0";
    console.log({ iframe });
    modalContainer.appendChild(iframe);

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
  }
}

window.customElements.define("modal-component", Modal);
