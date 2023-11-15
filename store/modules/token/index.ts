import { create } from 'zustand'

export interface Token {
  symbol: string
  addr: string
}
export interface TokenStore {
  token: string | undefined
  tokens: Token[]
  [key: string]: any
}

export const useTokenStore = create<TokenStore>(set => ({
  setToken: () => set(state => ({ token: state.token })),
  token: 'USDT',
  tokens: [
    { symbol: 'USDT', addr: '0x...' },
    { symbol: 'USDC', addr: '0x...' },
  ],
}))
