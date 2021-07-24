function getData() {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  app.appendChild(container);

  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.content);
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      //const h2 = document.createElement("h2");
      app.textContent = data.content;

      container.appendChild(card);
    })
    .catch((err) => {
      console.log(err);
    });
}
