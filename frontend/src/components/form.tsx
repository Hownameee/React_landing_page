import { useState } from "react";

export default function Form({ title }: { title: string }) {
  const [text, setText] = useState("");
  const url = 'http://localhost:4000'

  const handleGet = async () => {
    const res = await fetch(`${url}/hello`)
    setText(await res.text())
  };

  const handlePost = async () => {
    const res = await fetch(`${url}/capitalize`, {
      method: 'POST',
			body: text})
    setText(await res.text())
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
