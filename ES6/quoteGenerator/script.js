let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector(".btn");

let url = "https://api.quotable.io/random";

let fetchQuote = (url) => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      quote.innerText = data.content;
      author.innerText = data.author;
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", () => {
  fetchQuote(url);
});
