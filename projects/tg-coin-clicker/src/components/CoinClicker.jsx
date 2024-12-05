import { useState, useEffect } from 'react';

const CoinClicker = () => {
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(1000); // Starting energy
  const [clickValue, setClickValue] = useState(1);
  const [level, setLevel] = useState(1);
  const [nextLevelCoins, setNextLevelCoins] = useState(5000); // Coins needed to level up
  const [clickAnimations, setClickAnimations] = useState([]); // Array to hold click animations

  // Handle clicking on the coin
  const handleCoinClick = (e) => {
    if (energy > 0) { // Only allow clicking if energy is available
      setCoins(coins + clickValue);
      setEnergy(energy - 1); // Decrease energy by 1 for each click

      // Create a new click animation
      const newClickAnimation = {
        value: clickValue,
        id: Date.now(), // Unique ID for the animation
        position: { x: e.clientX, y: e.clientY },
      };

      // Add animation to the state
      setClickAnimations((prev) => [...prev, newClickAnimation]);

      // Check for level up
      if (coins + clickValue >= nextLevelCoins) {
        levelUp();
      }
    }
  };

  // Function to handle leveling up
  const levelUp = () => {
    setLevel(level + 1);
    setNextLevelCoins(nextLevelCoins + 1000 * level); // Increase coins required for next level
    alert(`Congratulations! You've leveled up to Level ${level + 1}!`);
  };

  // Calculate progress for the progress bar
  const progressBarWidth = (coins / nextLevelCoins) * 100;

  // Increment energy every second
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => (prev < 1000 ? prev + 1 : 1000)); // Max energy is 1000
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 to-orange-400 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-white shadow-lg">Coin Clicker Adventure!</h1>
      
      <div className="relative mb-8">
        {/* Coin Image */}
        <img
          src="/coin.png" // Ensure this path is correct
          alt="coin"
          className="w-32 h-32 cursor-pointer transition-transform transform hover:scale-110"
          onClick={handleCoinClick}
        />

        {/* Click Rate Animation */}
        {clickAnimations.map((anim) => (
          <div
            key={anim.id}
            style={{
              position: 'absolute',
              top: anim.position.y + -300, // Adjust this value to move the animation closer to the coin
              left: anim.position.x - 150, // Adjust this value to center the animation over the click location
              transform: 'translate(-50%, -50%)', // Adjust to center over the click
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'yellow',
              pointerEvents: 'none', // Prevent pointer events on the animation
              animation: 'fadeOut 1s forwards', // Custom animation for fade out
              opacity: 1,
            }}
          >
            +{anim.value}
          </div>
        ))}
      </div>

      <p className="mt-4 text-2xl font-semibold text-white shadow-lg">Total Coins: {coins}</p>
      <p className="mt-2 text-xl font-semibold text-white shadow-lg">Level: {level}</p>
      <p className="mt-2 text-xl font-semibold text-white shadow-lg">Energy: {energy}/1000</p> {/* Display energy with max */}

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
        <div
          style={{ width: `${progressBarWidth}%` }}
          className="bg-yellow-500 h-full rounded-full transition-all duration-300"
        />
      </div>
      <p className="mt-2 text-sm text-white">Coins to Next Level: {nextLevelCoins - coins}</p>
      
      <style jsx>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5); // Scale up for effect
          }
        }
      `}</style>
    </div>
  );
};

export default CoinClicker;
