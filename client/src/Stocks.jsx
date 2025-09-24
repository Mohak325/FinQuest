import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import stockService from './services/stockService';

// --- Helper Components ---
const Icon = ({ src, alt, className = '' }) => <img src={src} alt={alt} className={`w-8 h-8 ${className}`} />;

const NavLink = ({ children, onClick }) => (
  <a href="#" onClick={onClick} className="text-white uppercase tracking-widest hover:text-green-400 transition-colors duration-300 text-lg">
    {children}
  </a>
);

// --- Main Stocks Component ---
const Stocks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profitability');
  const [amount, setAmount] = useState(70);
  const [duration, setDuration] = useState(1);
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const assetTickers = ['AAPL', 'GOOGL', 'GLD', 'MSFT', 'TSLA'];

  useEffect(() => {
    const fetchAllAssets = async () => {
      setIsLoading(true);
      const assetDataPromises = assetTickers.map(ticker =>
        stockService.getQuote(ticker)
      );
      const resolvedData = await Promise.all(assetDataPromises);

      // This robust formatting logic prevents the TypeError
      const formattedData = resolvedData
        .filter(data => data && data['01. symbol'])
        .map(data => {
          const priceKey = Object.keys(data).find(k => k.includes('05. price'));
          const changeKey = Object.keys(data).find(k => k.includes('09. change'));
          const changePercentKey = Object.keys(data).find(k => k.includes('10. change percent'));
          const changeValue = parseFloat(data[changeKey]);

          return {
            name: data['01. symbol'],
            price: parseFloat(data[priceKey]).toFixed(2),
            change: changeValue.toFixed(2),
            changePercent: parseFloat(data[changePercentKey].replace('%', '')).toFixed(2),
            changeType: changeValue >= 0 ? 'positive' : 'negative',
          };
        });

      setAssets(formattedData);
      setIsLoading(false);
    };

    fetchAllAssets();
  }, []);

  return (
    <div className="bg-black min-h-screen font-['VT323',_monospace] text-white p-4 sm:p-8">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}</style>
      
      <header className="flex justify-between items-center pb-8 border-b-2 border-gray-800">
        <Icon src="/mascot.png" alt="Mascot" className="w-12 h-12" />
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink onClick={() => navigate('/dashboard')}>Home</NavLink>
          <NavLink>Analysis</NavLink>
          <NavLink onClick={() => navigate('/investment')}>Investment</NavLink>
          <NavLink>Banking</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline uppercase tracking-widest text-lg">Profile</span>
          <Icon src="/profile.png" alt="Profile" className="w-10 h-10 invert" />
        </div>
      </header>

      <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="border-2 border-green-500 rounded-lg p-4 space-y-4 h-fit">
          <div className="relative">
            <input type="text" placeholder="SEARCH" className="w-full bg-black border-2 border-gray-700 rounded-md p-2 pl-4 pr-10 text-lg tracking-widest focus:outline-none focus:border-green-500"/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>
          <div className="flex bg-black border-2 border-gray-700 rounded-md">
            <button onClick={() => setActiveTab('profitability')} className={`w-1/2 p-2 text-lg tracking-widest transition-colors rounded-md ${activeTab === 'profitability' ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>PROFITABILITY</button>
            <button onClick={() => setActiveTab('favourites')} className={`w-1/2 p-2 text-lg tracking-widest transition-colors rounded-md ${activeTab === 'favourites' ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>FAVOURITES</button>
          </div>
          <div className="space-y-3">
            {isLoading ? (
              <p className="text-center p-4 text-gray-400">Loading Assets...</p>
            ) : (
              assets.map(asset => (
                <div key={asset.name} className="flex justify-between items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-lg tracking-wider">{asset.name}</span>
                  </div>
                  <span className={`text-lg ${asset.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                    {asset.changePercent}%
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex items-center justify-center border-2 border-blue-500 rounded-lg p-8 text-center h-[20rem] lg:h-auto">
          <h2 className="text-3xl tracking-widest">SELECT COMPANY TO VISUALISE ITS GRAPH</h2>
        </div>

        <div className="space-y-4">
            <button className="w-full bg-green-500 text-black text-2xl font-bold py-3 rounded-md tracking-widest hover:bg-green-600 transition-colors">PAYMENTS</button>
            <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">CURRENT BALANCE:</p>
                <p className="text-2xl">5000</p>
            </div>
            <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">AMOUNT, INR</p>
                <div className="flex items-center justify-center gap-4 mt-1">
                    <button onClick={() => setAmount(a => Math.max(0, a - 10))} className="text-3xl p-1">-</button>
                    <p className="text-2xl w-20">{amount}</p>
                    <button onClick={() => setAmount(a => a + 10)} className="text-3xl p-1">+</button>
                </div>
            </div>
             <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">DURATION</p>
                 <div className="flex items-center justify-center gap-4 mt-1">
                    <button onClick={() => setDuration(d => Math.max(1, d - 1))} className="text-3xl p-1">-</button>
                    <p className="text-2xl w-20">{duration} MIN</p>
                    <button onClick={() => setDuration(d => d + 1)} className="text-3xl p-1">+</button>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="w-1/2 bg-green-500 text-black py-3 rounded-md text-2xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-green-600">UP ↑</button>
                <button className="w-1/2 bg-red-500 text-black py-3 rounded-md text-2xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-red-600">DOWN ↓</button>
            </div>
             <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">PROFIT: +INR62.3</p>
            </div>
        </div>
        
      </main>
    </div>
  );
};

export default Stocks;