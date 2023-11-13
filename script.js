const btn = document.getElementById("quoteB");
const apiKey = "ImeBj/ywczgc4iw5xh8Kug==6me62DBd0tX3DSD5";

const category='love';

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

async function generate() {
    btn.disabled=true;// disable generate button while generating the quote   
    const response = await fetch(apiURL, options);
    const data = await response.json();
    document.getElementById("quote").innerText = data[0].quote; // get quote
    document.getElementById("author").innerText = data[0].author; // get author name 
    btn.disabled=false; // enable the button
  
}

