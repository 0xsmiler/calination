import { createConfig, http } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { walletConnect, metaMask, coinbaseWallet } from '@wagmi/connectors';

// Get projectId from environment variable with fallback for development
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

export const config = createConfig({
  // Set Base as the first chain to prioritize it as the default
  chains: [base, mainnet],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId,
      showQrModal: true,
      // Setting Base as the default chain (chainId 8453)
      defaultChain: base,
    }),
    metaMask({
      // Setting Base as the default chain for MetaMask
      defaultChain: base,
    }),
    coinbaseWallet({
      // Setting Base as the default chain for Coinbase Wallet
      defaultChain: base,
    }),
  ],
});