import React, { useState, useEffect } from "react";
import { useAccount, useConnect, useChainId, useSwitchChain } from "wagmi";
import { base } from 'wagmi/chains';
import WalletModal from "./WalletModal";

function BuyCNTBtn() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isConnected } = useAccount();
    const { connect, connectors, error, isLoading } = useConnect();
    const chainId = useChainId();
    const { switchChain } = useSwitchChain();

    const uniswapUrl = "https://app.uniswap.org/swap?chain=base&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0xEe6603c1F8A8616Ee1038067fb7d6049bC992592";

    const handleBuyClick = () => {
        // Always open Uniswap URL directly, regardless of wallet connection status
        window.open(uniswapUrl, '_blank', 'noopener,noreferrer');
    };

    const handleWalletConnect = (connector) => {
        connect({ connector });
    };

    // Close modal automatically upon successful connection
    useEffect(() => {
        if (isConnected && isModalOpen) {
            setIsModalOpen(false);
        }
    }, [isConnected, isModalOpen]);

    // Switch to Base network if connected but on a different network
    useEffect(() => {
        if (isConnected && chainId && chainId !== base.id && switchChain) {
            // Switch to Base network automatically when connected but on wrong network
            switchChain({ chainId: base.id });
        }
    }, [isConnected, chainId, switchChain]);

    return (
        <div className="mt-16 flex justify-center">
            <button
                className="bg-[#C68F00] hover:bg-[#b07e00] text-white font-semibold text-lg px-[80px] py-[20px] rounded-md transition"
                onClick={handleBuyClick}
            >
                Buy CNT
            </button>
            {isModalOpen && (
                <WalletModal
                    connectors={connectors}
                    handleConnect={handleWalletConnect}
                    isLoading={isLoading}
                    error={error}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </div>
    );
}

export default BuyCNTBtn;