import { useState, useEffect } from "react";

function GreetingTitle() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    if (name.trim() === "") {
      document.title = "Welcome!";
    } else {
      document.title = `${greeting}, ${name}`;
    }
  }, [name, greeting]);

  return (
    <div>
      <h2>Greeting Title</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      >
        <option value="Hello">Hello</option>
        <option value="Hi">Hi</option>
        <option value="Welcome">Welcome</option>
      </select>
    </div>
  );
}

export default GreetingTitle;
