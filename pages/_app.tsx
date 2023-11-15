import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import '../plugins'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { NextUIProvider } from '@nextui-org/react'
import MountsProvider from '../components/MountsProvider'

import { chains, wagmiConfig } from '../config'

function App({ Component, pageProps }: AppProps) {
  return (
    <MountsProvider install={[
      { component: WagmiConfig, props: { config: wagmiConfig } },
      { component: RainbowKitProvider, props: { chains } },
      NextUIProvider,
    ]}
    >
      <Component {...pageProps} />
    </MountsProvider>
  )
}

export default App
