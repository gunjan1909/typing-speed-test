// random quotes api url
const quoteApiUrl =
  "https://api.quotable.io/random?minLength=150&maxLength=200";

const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistake = 0;

//display random quotes

const renderNewQuote = async () => {
  // fetch contnts from  api
  const response = await fetch(quoteApiUrl);

  //store response
  let data = await response.json();

  //access quote
  quote = data.content;
  console.log(quote);

  //array of characters in the quote
  let arr = quote.split("").map((value) => {
    //wrap the characters in a span tag
    return "<span class = quote-chars>" + value + "</span>";
  });

  //join array for displaying
  quoteSection.innerHTML += arr.join("");
};

///logic for comparing input words with quote
userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");

  //create an array from received span tags
  quoteChars = Array.from(quoteChars);
});

//start test
const startTest = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  document.getElementById("start-test").style.display = "none";
  document.getElementById("stop-test").style.display = "block";
};

window.onload = () => {
  userInput.value = "";
  document.getElementById("start-test").style.display = "block";
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  renderNewQuote();
};
