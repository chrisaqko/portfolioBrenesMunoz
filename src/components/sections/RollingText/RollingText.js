import React, { useEffect, useRef } from "react";

const RollingText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element || element.dataset.processed === "true") return;

    const innerText = text;
    element.innerHTML = "";

    const textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
      const span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
    element.dataset.processed = "true";

    const handleMouseOver = () => {
      element.classList.remove("play");
    };

    element.addEventListener("mouseover", handleMouseOver);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
    };
  }, [text]);

  return (
    <span ref={textRef} className="rolling-text">
      {text}
    </span>
  );
};

export default RollingText;
