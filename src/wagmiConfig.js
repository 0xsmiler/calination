import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { walletConnect, metaMask, coinbaseWallet } from '@wagmi/connectors';

// Get projectId from environment variable with fallback for development
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

export const config = createConfig({
  chains: [mainnet, sepolia], // Add the chains you want to support
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId,
      showQrModal: true, // This will show the QR code modal like in your screenshot
    }),
    metaMask(),
    coinbaseWallet(),
  ],
});