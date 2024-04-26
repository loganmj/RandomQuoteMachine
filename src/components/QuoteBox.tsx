import { useState } from "react";

const QuoteBox = () => {
  const [text, setText] = useState();

  return (
    <div id="quote-box">
      <label id="text">{text}</label>
      <label id="author"></label>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote"></a>
    </div>
  );
};

export default QuoteBox;
