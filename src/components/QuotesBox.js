import React, { useState } from "react";
import quotes from "../quotes.json";

let positionQuote = Math.floor(Math.random() * quotes.length);
const QuotesBox = () => {
  const colors = [
    "#EC7063",
    "#AF7AC5",
    "#2980B9",
    "#1ABC9C",
    "#F1C40F",
    "#E67E22",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const [quote, setQuote] = useState(quotes[positionQuote]);

  const changeQuote = () => {
    positionQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[positionQuote]);
  };
  document.body.style = `background:${color}`;
  return (
    <div className="card" style={{ color: color }}>
      <ul>
        <i className="fa-solid fa-quote-left"></i>
        <li>{quote.quote}</li>
      </ul>
      <p id="author">{quote.author}</p>
      <button
        onClick={changeQuote}
        type="button"
        style={{ background: color }}
        id="next"
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default QuotesBox;
