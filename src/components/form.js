import { useState } from "react";

export default function Form({ title }) {
  console.log("re-render");

  const [text, setText] = useState("");

  const handleGet = () => {
    fetch("http://localhost:5000/hello")
      .then((res) => res.text())
      .then((res) => setText(res));
  };

  const handlePost = () => {
    fetch("http://localhost:5000/capitalize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }), // Send JSON data
    })
      .then((res) => res.text())
      .then((res) => setText(res));
  };

  return (
    <div className="form">
      <h2 className="form-title">{title}</h2>
      <input
        type="text"
        placeholder="Enter your email address"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <a onClick={() => handleGet()}>Send get</a>
      <a onClick={() => handlePost()}>Send post</a>
    </div>
  );
}
