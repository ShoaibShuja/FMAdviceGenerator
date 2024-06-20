const adviceNumber = document.getElementById("advice__number");
const quote = document.getElementById("quote");
const generateBtn = document.getElementById("generate__button");

fetch("https://api.adviceslip.com/advice")
.then(res => res.json())
.then(data => generateQuote(data));

const generateQuote = (data) => {
  adviceNumber.innerHTML = '#' + data.slip.id;

  quote.innerHTML = `<i class="fa-solid fa-quote-left"></i>${data.slip.advice}<i class="fa-solid fa-quote-right"></i>`;
}

generateBtn.onclick = () => window.location.reload();