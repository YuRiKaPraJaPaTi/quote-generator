
//quotes array
const quotes= [
  {
    "text": "1. Quiet people have the loudest minds",
    "author": "Stephen Hwaking",
    "category":"Science"
  },
  {
    "text": "2. Setting goals is the first step in turning the invisible into the visible.",
    "author": "Tony Robbins",
    "category": "Work"
  },
  {
    "text": "3. One never notices what has been done; one can only see what remains to be done.",
    "author": "Marie Curie",
    "category":"Science"
  },
  {
    "text": "4. People say nothing is impossible, but I do nothing every day.",
    "author": "Winnie the Pooh",
    "category": "Funny"
  },
  {
    "text": "5. I never dreamed about success. I worked for it.",
    "author": "Estée Lauder",
    "category": "Success"
  },
  {
    "text": "6. Either you run the day or the day runs you.",
    "author": "Jim Rohn",
    "category": "Work"
  },
  {
    "text": "7. Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
    "author": "John Wooden",
    "category": "Success"
  },
  {
    "text": "8. Work until your bank account looks like a phone number.",
    "author": "Unknown",
    "category": "Funny"
  }
]
// let quotes = [];

//   async function loadQuotes() {
//     const response = await fetch('quotes.json');
//     quotes = await response.json();
//   }

let currentIndex;



function displayQuote(){
  const selectedCategory = document.getElementById("categorySelect").value;

  // const categoryQuotes = quotes[selectedCategory];

  const categoryQuotes = selectedCategory === "All" 
  ? quotes 
  : quotes.filter(quote => quote.category == selectedCategory);

  let randomIndex = Math.floor(Math.random() * categoryQuotes.length);

  currentIndex = randomIndex;

  let randomQuote = categoryQuotes[randomIndex]

  document.getElementById("quote").textContent = randomQuote.text;
  document.getElementById("author").textContent = "— " + randomQuote.author;
}
document.getElementById("random").addEventListener("click", displayQuote);


function previousQuote(){
  const selectedCategory = document.getElementById("categorySelect").value;
  const categoryQuotes = selectedCategory === "All" 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  currentIndex = (currentIndex - 1 + categoryQuotes.length) % categoryQuotes.length;
  const selectedQuote = categoryQuotes[currentIndex];
  document.getElementById("quote").textContent = selectedQuote.text;
  document.getElementById("author").textContent = "— " + selectedQuote.author;
}
document.getElementById("previous").addEventListener("click", previousQuote);


function nextQuote(){
  const selectedCategory = document.getElementById("categorySelect").value;
  const categoryQuotes = selectedCategory === "All" 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  currentIndex = (currentIndex + 1) % categoryQuotes.length;
  const selectedQuote = categoryQuotes[currentIndex];
  document.getElementById("quote").textContent = selectedQuote.text;
  document.getElementById("author").textContent = "— " + selectedQuote.author;
}
document.getElementById("next").addEventListener("click", nextQuote);

// document.addEventListener("DOMContentLoaded", async () => {
//   await loadQuotes();
//   document.getElementById("random").addEventListener("click", displayQuote);
// });

function copyQuote(){
  const quoteText = document.getElementById('quote').innerText;
  navigator.clipboard.writeText(quoteText)
    .then(() => alert('Quote copied!'))
    .catch(() => alert('Failed to copy.'));
}
document.getElementById("copy-button").addEventListener("click", copyQuote);


// Increase font size
document.getElementById('increase-font').addEventListener('click', function () {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  changeFontSize(quote, 1.2);
  changeFontSize(author, 1.2);
});

// Decrease font size
document.getElementById('decrease-font').addEventListener('click', function () {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  changeFontSize(quote, 0.8);
  changeFontSize(author, 0.8);
});

// Helper to change font size
function changeFontSize(element, factor) {
  const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
  const currentSizeNum = parseFloat(currentSize);
  element.style.fontSize = (currentSizeNum * factor) + 'px';
}


var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("darkTheme");

  if(document.body.classList.contains("darkTheme")){
    icon.src = "images/sun.png";
  } else{
    icon.src = "images/moon.png";
  }
}


