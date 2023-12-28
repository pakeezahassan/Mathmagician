const React = require("react");
const { useState } = require("react");

const DisplayQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const [quoteData] = useState(randomQuote);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Quote"),
      React.createElement("p", null, quoteData)
    )
  );
};

module.exports = DisplayQuote;
