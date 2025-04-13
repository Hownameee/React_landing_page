import { useState } from "react";
import { trpc } from "../utils/trpc";

export default function Form({ title }: { title: string }) {
  const [text, setText] = useState("");

  const handleGet = async () => {
    const res = await trpc.get.query("");
    setText(res.greeting);
  };

  const handlePost = async () => {
    const res = await trpc.post.query(text);
    setText(res.greeting);
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
