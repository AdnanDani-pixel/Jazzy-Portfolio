import { Routes, Route, Link } from 'react-router-dom';
import CoinClicker from './components/CoinClicker';
import Referrals from './components/Referrals';
import Task from './components/Task';
import Wallet from './components/Wallet';
import Booster from './components/Booster';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Main Content */}
      <Routes>
        <Route path="/" element={<CoinClicker />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/task" element={<Task />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/booster" element={<Booster />} />
      </Routes>

      {/* Bottom Navigation */}
      <nav className="bg-blue-600 p-2 md:p-4 text-white fixed bottom-0 w-full">
        <ul className="flex justify-around text-sm md:text-base">
          <li><Link to="/" className="hover:text-yellow-300">Coin Clicker</Link></li>
          <li><Link to="/referrals" className="hover:text-yellow-300">Referrals</Link></li>
          <li><Link to="/task" className="hover:text-yellow-300">Task</Link></li>
          <li><Link to="/wallet" className="hover:text-yellow-300">Wallet</Link></li>
          <li><Link to="/booster" className="hover:text-yellow-300">Booster</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
