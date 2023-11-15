import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import useSWR from 'swr'
import { Button, Image, Input } from '@nextui-org/react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { useAsyncFn } from 'react-use'
import { message } from 'antd'
import styles from '../styles/Home.module.css'
import { i18n } from '../plugins'
import LocaleDropdown from '../components/LocaleDropdown'
import { useTokenStore } from '../store/modules/token'
import { TokenSelect } from '../components/TokenSelect'
import { putPet } from '../apis'
import { delay } from '../utils'
import PageHeader from '../components/PageHeader'
import Balance from '../components/Balance'
import PageHead from '../components/PageHead'

const Home: NextPage = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const [state, doFetch] = useAsyncFn(async () => {
    await delay(2000)
    messageApi.success('Mitt Succeeded')
  })

  return (
    <div lang="en" className="w-full">
      <PageHead />

      <PageHeader />

      <main className={styles.main}>
        <div className="mt-2 w-4/6 max-w-xl">
          <Balance />
          <div className="mt-2 flex w-full gap-5">
            <Input className="flex-1" type="number" size="sm" />
            <TokenSelect />
          </div>
          <Button type="submit" className="mt-5 w-full" onClick={() => doFetch()} isLoading={state.loading}>
            Mitt
          </Button>
        </div>
      </main>

      {contextHolder}
    </div>
  )
}

export default Home
