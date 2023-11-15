import { Select, SelectItem } from '@nextui-org/react'
import { useTimeoutFn } from 'react-use'
import { useState } from 'react'
import { useTokenStore } from '../store/modules/token'

export function TokenSelect() {
  const { tokens } = useTokenStore()

  const [isLoading, setIsLoading] = useState(true)

  useTimeoutFn(() => setIsLoading(false), 2000)

  return (
    <Select
      label="Token"
      className="w-1/4"
      size="sm"
      defaultSelectedKeys={['USDT']}
      isLoading={isLoading}
    >
      {tokens.map(t => (
        <SelectItem key={t.symbol} value={t.symbol}>
          {t.symbol}
        </SelectItem>
      ))}
    </Select>
  )
}
