import { useState } from 'react';
import coinImg from '../assets/coin.png'; // Assume you have a coin image here


const Booster = () => {
  const [coins, setCoins] = useState(5000); // Assume user starts with 5000 coins
  const [clickUpgradeCost, setClickUpgradeCost] = useState(1000);
  const [energyUpgradeCost, setEnergyUpgradeCost] = useState(1000);
  const [clickValue, setClickValue] = useState(1);
  const [maxEnergy, setMaxEnergy] = useState(1000);

  // Upgrade Click Function
  const upgradeClick = () => {
    if (coins >= clickUpgradeCost) {
      setCoins(coins - clickUpgradeCost);
      setClickValue(clickValue + 1);
      setClickUpgradeCost(clickUpgradeCost * 2); // Increase cost
    }
  };

  // Upgrade Energy Function
  const upgradeEnergy = () => {
    if (coins >= energyUpgradeCost) {
      setCoins(coins - energyUpgradeCost);
      setMaxEnergy(maxEnergy + 500);
      setEnergyUpgradeCost(energyUpgradeCost * 2); // Increase cost
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Boost Your Power!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Click Booster */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Click Power Upgrade</h2>
          <p className="text-lg mb-4">Current Click Value: {clickValue}</p>
          <p className="text-sm mb-4 text-gray-600">Increase the amount of coins earned per click.</p>
          <button 
            onClick={upgradeClick} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={coins < clickUpgradeCost}
          >
            Upgrade Click (Cost: {clickUpgradeCost} coins)
          </button>
        </div>

        {/* Energy Booster */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Energy Capacity Upgrade</h2>
          <p className="text-lg mb-4">Current Max Energy: {maxEnergy}</p>
          <p className="text-sm mb-4 text-gray-600">Increase the maximum energy capacity.</p>
          <button 
            onClick={upgradeEnergy} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={coins < energyUpgradeCost}
          >
            Upgrade Energy (Cost: {energyUpgradeCost} coins)
          </button>
        </div>
      </div>

      {/* Coin Balance */}
      <div className="mt-8">
        <p className="text-lg font-bold">Coins Available: {coins}</p>
      </div>
      <img src={coinImg} alt="Coin" className="w-32 h-32 transition-transform transform hover:scale-110" />
    </div>
  );
};

export default Booster;
