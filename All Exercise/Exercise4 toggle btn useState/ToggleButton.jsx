import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </button>

      <p>
        The button is currently {isOn ? "ON" : "OFF"}
      </p>
    </div>
  );
}

export default ToggleButton;
