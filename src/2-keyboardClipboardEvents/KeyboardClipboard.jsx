import React from "react";
import { useState } from "react";

const KeyboardClipboard = () => {
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number");
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    e.target.className = "form-control border border-danger border-4";
    // e.target.style.border = "3px solid red"
  };

  const handleCopy = (e) => {
    alert("you are not allowed to copy");
    e.preventDefault();
  };
  const handleCut = (e) => {
    alert("you are not allowed to cut");
    e.preventDefault();
  };
  return (
    <div className="container">
      <h2 className="text-center">KeyboardClipboard</h2>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          //   e.target.value = e.target.value.toLocaleUpperCase();
          setContent(e.target.value.toLocaleUpperCase());
        }}
        onKeyDown={handleKeyDown}
        value={content}
      />
      <div className="mt-4">
        <h3>Copied Content</h3>
        <p onCopy={handleCopy} onCut={handleCut}>
          {content.toLocaleLowerCase()}
        </p>
      </div>

      <textarea
        className="form-control"
        name=""
        id=""
        cols="30"
        rows="10"
        onPaste={handlePaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
