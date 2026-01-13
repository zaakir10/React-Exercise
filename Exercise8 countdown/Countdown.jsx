import { useState, useEffect } from "react";

function Countdown() {
  const [inputSeconds, setInputSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start countdown
  function startTimer() {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  }

  // Stop / pause countdown
  function stopTimer() {
    setIsRunning(false);
  }

  // Reset countdown
  function resetTimer() {
    setIsRunning(false);
    setTimeLeft(Number(inputSeconds));
  }

  // Handle input change
  function handleInputChange(e) {
    const value = e.target.value;
    setInputSeconds(value);
    setTimeLeft(Number(value));
  }

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={inputSeconds}
        onChange={handleInputChange}
      />

      <h3>Time Left: {timeLeft} seconds</h3>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Countdown;
