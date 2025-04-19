import React, { useState, useEffect } from "react";

export const TradingView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Check if device is mobile and specifically iOS
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      
      setIsMobile(isMobileDevice);
      setIsIOS(isIOSDevice);
      
      // Set iframe error right away for iOS devices - they'll use direct link instead
      if (isIOSDevice) {
        setIframeError(true);
        setIsLoading(false);
      }
    };

    // Set a shorter timeout for mobile devices
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log("DEXTools chart loading is taking longer than expected");
        // On mobile, shorter timeout
        if (isMobile) {
          setIframeError(true);
          setIsLoading(false);
        }
      }
    }, isMobile ? 3000 : 5000);

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

  // Get the correct chart URL based on device
  const getChartUrl = () => {
    // Use a more basic chart for mobile devices
    if (isMobile) {
      return "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?theme=light&chartType=1&drawingToolbars=false&defaultInterval=30m&headerView=false";
    }
    return "https://www.dextools.io/widget-chart/en/solana/pe-light/CvMmJj7Cbx73yGPtuDCq9DKNAE4sFuuR5q26w9562x8Y?theme=light&chartType=2&chartResolution=30&drawingToolbars=false";
  };

  return (
    <div className="w-full h-[500px] overflow-hidden">
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <p>Loading DEXTools chart...</p>
        </div>
      )}
      
      {iframeError ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4">
          <p className="text-center mb-4">
            {isIOS ? "Charts are not fully compatible with iOS devices." : "Unable to display chart on this device."}
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
          id="dextools-widget"
          title="DEXTools Trading Chart"
          width="100%"
          height="100%"
          style={{ 
            border: "none",
            display: isLoading ? 'none' : 'block',
            // Mobile-specific adjustments
            overflow: 'hidden',
            minHeight: '500px',
            maxWidth: '100vw',
            background: '#fff'
          }}
          onLoad={() => setIsLoading(false)}
          onError={handleIframeError}
          src={getChartUrl()}
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-storage-access-by-user-activation"
        ></iframe>
      )}
    </div>
  );
};

export default TradingView;
