import React, { useState, useEffect } from "react";

export const TradingView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Check if device is mobile and specifically Safari
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      // Detect Safari browser (both desktop and mobile)
      const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
      // Detect iOS devices
      const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      
      setIsMobile(isMobileDevice);
      setIsSafari(isSafariBrowser && isIOSDevice);
    };

    // Set a timeout to check if loading takes too long
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log("Chart loading is taking longer than expected");
        if (isMobile) {
          setIframeError(true);
          setIsLoading(false);
        }
      }
    }, isMobile ? 10000 : 15000); // Longer timeout to allow chart to load

    // Initial device check
    checkDevice();
    
    // Add resize listener to detect orientation changes
    window.addEventListener('resize', checkDevice);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isLoading, isMobile]);

  // Handle iframe load error
  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  // Get chart URL based on device type
  const getChartUrl = () => {
    // Use TradingView for Safari on iOS (more compatible than DEXTools)
    if (isSafari) {
      return "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=COINBASE:SOLUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&hideideas=1&theme=light&style=1&timezone=Etc/UTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=COINBASE:SOLUSD";
    }
    // Use DEXTools for non-Safari browsers
    return isMobile 
      ? "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?embed=1&simple=1&theme=light" 
      : "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?embed=1&theme=light";
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
            href="https://www.dextools.io/app/en/solana/pair-explorer/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#C68F00] text-white rounded hover:bg-[#C68F00]/80"
          >
            View Chart on DEXTools
          </a>
        </div>
      ) : (
        <iframe
          id="tradingview_76d87"
          title="Trading Chart"
          width="100%"
          height="100%"
          style={{ 
            border: "none",
            display: isLoading ? 'none' : 'block',
            overflow: 'hidden',
            minHeight: '500px',
            maxWidth: '100vw',
            background: '#fff'
          }}
          onLoad={() => setIsLoading(false)}
          onError={handleIframeError}
          src={getChartUrl()}
          allow="accelerometer; autoplay; camera; gyroscope; payment"
          importance="high"
        ></iframe>
      )}
    </div>
  );
};

export default TradingView;
