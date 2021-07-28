function getData() {
  const app = document.getElementById("root");

  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.content);
      app.textContent = data.content;
    })
    .catch((err) => {
      console.log(err);
    });
}
