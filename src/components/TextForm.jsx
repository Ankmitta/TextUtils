import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("uppercase btn clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    let newText2 = text.toLocaleLowerCase();
    setText(newText2);
  };

  const handleClearClick = () => {
    let newText2 = "";
    setText(newText2);
  };
  const handleExtraSpaces = () => {
    newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const handleParaClick = () => {
    let newText = text.replaceAll(".", "\n");
    setText(newText);
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "grey"
        }}
      >
        <h1>{props.heading}</h1>

        <div class="mb-3">
          <textarea
            class="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "grey"
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-4" onClick={handleUpClick}>
          Convert To Upercase{" "}
        </button>
        <button className="btn btn-primary" onClick={handlelowClick}>
          Convert To lowerCase
        </button>
        <button className="btn btn-primary mx-4" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-4" onClick={handleParaClick}>
          Break into Lines
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "grey"
        }}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p> Avergae time To Read: {0.008 * text.split(" ").length} min</p>
        <h3> Preview </h3>
        <p>
          {text.length > 0 ? text : "Enter something in textarea to Preview"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
