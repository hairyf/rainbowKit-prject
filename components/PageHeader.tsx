import { ConnectButton } from '@rainbow-me/rainbowkit'
import LocaleDropdown from './LocaleDropdown'

function PageHeader() {
  return (
    <div className="flex fixed top-10 right-10 gap-5">
      <ConnectButton />
      <LocaleDropdown />
    </div>
  )
}
export default PageHeader
