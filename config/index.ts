import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'

import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import {
  arbitrum,
  base,
  goerli,
  mainnet,
  optimism,
  polygon,
  zora,
} from 'wagmi/chains'

import { publicProvider } from 'wagmi/providers/public'

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()],
)

export const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})