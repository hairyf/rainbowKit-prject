import { useAccount, useContractRead } from 'wagmi'
import { useTokenStore } from '../store'

function Balance() {
  const { address } = useAccount()
  const { token } = useTokenStore()

  const { data: tokenBalance } = useContractRead({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'balanceOf',
    args: [address || '0x'],
    enabled: !!address,
  })
  return (
    <div>
      <span>Balance: </span>
      {tokenBalance?.toString() || '0'}
      <span>{` ${token}`}</span>
    </div>
  )
}

export default Balance
