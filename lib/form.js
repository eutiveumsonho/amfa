const letterForm = document.getElementById("letter-form");

letterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);

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
