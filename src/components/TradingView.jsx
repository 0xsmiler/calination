import React, { useState, useEffect } from "react";

export const TradingView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Set a timeout to check if loading takes too long
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log("Chart loading is taking longer than expected");
        setIframeError(true);
        setIsLoading(false);
      }
    }, 15000); // Generous timeout to ensure chart loads
    
    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  // Handle iframe load error
  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full h-[500px] overflow-hidden bg-white">
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <p className="text-center">Loading chart...</p>
        </div>
      )}
      
      {iframeError ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4">
          <p className="text-center mb-4">
            Unable to load chart on this device.
          </p>
          <a 
            href="https://www.geckoterminal.com/base/pools/0x7605e676976f68d9cf14fe4475c5771e24ea4ce332fede246bd691c39491602b" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#C68F00] text-white rounded hover:bg-[#C68F00]/80"
          >
            View Chart on GeckoTerminal
          </a>
        </div>
      ) : (
        <iframe 
          height="100%" 
          width="100%" 
          id="geckoterminal-embed" 
          title="GeckoTerminal Embed" 
          src="https://www.geckoterminal.com/base/pools/0x7605e676976f68d9cf14fe4475c5771e24ea4ce332fede246bd691c39491602b?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=15m" 
          frameBorder="0" 
          allow="clipboard-write" 
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={handleIframeError}
          style={{ 
            border: "none",
            display: isLoading ? 'none' : 'block',
            overflow: 'hidden',
            minHeight: '500px',
            maxWidth: '100vw',
            background: '#000'
          }}
        ></iframe>
      )}
    </div>
  );
};

export default TradingView;
