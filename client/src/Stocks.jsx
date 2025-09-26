import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import stockService from './services/stockService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Helper Components ---
const Icon = ({ src, alt, className = '' }) => <img src={src} alt={alt} className={`w-8 h-8 ${className}`} />;
const NavLink = ({ children, onClick }) => (
  <a href="#" onClick={onClick} className="text-white uppercase tracking-widest hover:text-green-400 transition-colors duration-300 text-lg">{children}</a>
);

// --- Main Stocks Component ---
const Stocks = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(UserContext);

  // State for the page
  const [activeTab, setActiveTab] = useState('profitability');
  const [price, setPrice] = useState(70);
  const [quantity, setQuantity] = useState(1);
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State for Chart and Search
  const [selectedStock, setSelectedStock] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [isChartLoading, setIsChartLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // useEffect for fetching the initial list of 5 stocks
  useEffect(() => {
    const fetchInitialAssets = async () => {
      setIsLoading(true);
      const initialTickers = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN'];
      const assetDataPromises = initialTickers.map(ticker => stockService.getQuote(ticker));
      const resolvedData = await Promise.all(assetDataPromises);

      const formattedData = resolvedData
        .filter(data => data)
        .map(data => ({
          name: data['01. symbol'],
          price: parseFloat(data['05. price']).toFixed(2),
          changePercent: parseFloat(data['10. change percent'].replace('%', '')).toFixed(2),
          changeType: parseFloat(data['09. change']) >= 0 ? 'positive' : 'negative',
        }));
      setAssets(formattedData);
      setIsLoading(false);
    };
    fetchInitialAssets();
  }, []);

  // useEffect for handling the search functionality
  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.length > 1) {
        const results = await stockService.searchForSymbols(searchQuery);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };
    const debounceTimeout = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  // Function to handle selecting a stock to view its chart
  const handleSelectStock = async (ticker) => {
    setSearchQuery('');
    setSearchResults([]);
    setIsChartLoading(true);
    setSelectedStock(ticker);
    
    const historicalData = await stockService.getDailyAdjustedData(ticker);
    if (historicalData && Array.isArray(historicalData)) {
      const formattedData = historicalData
        .filter(data => data && data.date && data.close)
        .map(data => ({
          date: new Date(data.date).toLocaleDateString(),
          price: data.close,
        }));
      setChartData(formattedData);
    }
    setIsChartLoading(false);
  };

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
        {/* Left Panel: Search and Asset List */}
        <div className="border-2 border-green-500 rounded-lg p-4 space-y-4 h-fit">
          <div className="relative">
            <input 
              type="text" 
              placeholder="SEARCH SYMBOL" 
              className="w-full bg-black border-2 border-gray-700 rounded-md p-2 pl-4 text-lg tracking-widest focus:outline-none focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchResults.length > 0 && (
              <div className="absolute z-10 w-full bg-black border-2 border-gray-700 mt-1 rounded-md max-h-60 overflow-y-auto">
                {searchResults.map(result => (
                  <div 
                    key={result.symbol} 
                    className="p-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => handleSelectStock(result.symbol)}
                  >
                    {result.symbol} - {result.longname || result.shortname}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex bg-black border-2 border-gray-700 rounded-md">
            <button onClick={() => setActiveTab('profitability')} className={`w-1/2 p-2 text-lg tracking-widest transition-colors rounded-md ${activeTab === 'profitability' ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>PROFITABILITY</button>
            <button onClick={() => setActiveTab('favourites')} className={`w-1/2 p-2 text-lg tracking-widest transition-colors rounded-md ${activeTab === 'favourites' ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>FAVOURITES</button>
          </div>
          <div className="space-y-3">
            {isLoading ? <p className="text-center text-gray-400">Loading Assets...</p> : assets.map(asset => (
              <div key={asset.name} onClick={() => handleSelectStock(asset.name)} className="flex justify-between items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
                <span>{asset.name}</span>
                <span className={asset.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}>{asset.changePercent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Panel: Chart */}
        <div className="border-2 border-blue-500 rounded-lg p-4 flex flex-col items-center justify-center min-h-[400px]">
          {isChartLoading ? <p>Loading Chart...</p> : selectedStock && chartData.length > 0 ? (
            <>
              <h2 className="text-2xl mb-4">{selectedStock} Price (1 Year)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis dataKey="date" stroke="#9CA3AF" tick={{ fontSize: 10 }}/>
                  <YAxis stroke="#9CA3AF" domain={['auto', 'auto']} />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Line type="monotone" dataKey="price" stroke="#10B981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </>
          ) : (
            <h2 className="text-3xl text-center tracking-widest">SELECT COMPANY TO VISUALISE ITS GRAPH</h2>
          )}
        </div>
        
        {/* Right Panel: Trading Controls */}
        <div className="space-y-4">
            <button className="w-full bg-green-500 text-black text-2xl font-bold py-3 rounded-md tracking-widest hover:bg-green-600 transition-colors">PAYMENTS</button>
            <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">CURRENT BALANCE:</p>
                <p className="text-2xl">{loading ? 'Loading...' : (user ? `$${user.accountBalance.toLocaleString()}` : 'N/A')}</p>
            </div>
            <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">PRICE(INR)</p>
                <p className="text-2xl w-20 mx-auto">{price}</p>
            </div>
            <div className="text-center bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3">
                <p className="text-gray-400 tracking-widest">QUANTITY</p>
                <div className="flex items-center justify-center gap-4 mt-1">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-3xl p-1">-</button>
                    <p className="text-2xl w-20">{quantity}</p>
                    <button onClick={() => setQuantity(q => q + 1)} className="text-3xl p-1">+</button>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="w-1/2 bg-green-500 text-black py-3 rounded-md text-2xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-green-600">BUY</button>
                <button className="w-1/2 bg-red-500 text-black py-3 rounded-md text-2xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-red-600">SELL</button>
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