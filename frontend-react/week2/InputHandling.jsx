import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Event handler practice</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={() => alert(name)}>Button</button>
      <h3>{name}</h3>
    </div>
  );
}

export default App;
