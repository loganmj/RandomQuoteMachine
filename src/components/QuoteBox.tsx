import { useState, useEffect } from "react";
import "./QuoteBox.css";

const QuoteBox = () => {
  const [text, setText] = useState("DEFAULT QUOTE");
  const [author, setAuthor] = useState("DEFAULT AUTHOR");
  const QUOTABLE_API_URL = "https://api.quotable.io/random";
  const TWEET_QUOTE_URL = "https://twitter.com/intent/tweet";

  // Fetch a quote when the component mounts
  useEffect(() => {
    GetQuote();
  }, []);

  async function GetQuote() {
    try {
      const response = await fetch(QUOTABLE_API_URL);

      if (!response.ok) {
        throw new Error("Failed to retrieve quote.");
        return;
      }

      const data = await response.json();
      setText(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Failed to retrieve quote. | ", error);
    }

    return;
  }

  return (
    <div id="quote-box" className="d-flex flex-column">
      <div id="quote-text">
        <label id="text">{text}</label>
      </div>
      <div id="quote-author">
        <label id="author">{author}</label>
      </div>
      <div id="buttons">
        <button id="new-quote" onClick={GetQuote}>
          New Quote
        </button>
        <a id="tweet-quote" href={TWEET_QUOTE_URL} target="_blank">
          Tweet Quote!
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
