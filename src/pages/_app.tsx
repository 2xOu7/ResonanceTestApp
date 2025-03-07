import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import React, { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { Box } from '@mui/material'
import { Intercom } from '@intercom/messenger-js-sdk'

export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState<string>('owner')
  const [userId, setUserId] = useState<string>(
    'db97b059-cbe8-454b-9ab1-7ee38499222e'
  )

  useEffect(() => {
    {
      Intercom({
        app_id: 'y52bz4ne',
        user_id: '123',
        name: 'katherine',
        email: 'katherine@useresonance.com',
        created_at: 123,
        custom_attribute: 'test',
      })
    }
  }, [])

  const customPageProps = {
    ...pageProps,
    role,
    setRole,
    userId,
    setUserId,
  }

  return (
    <>
      <Sidebar />
      <Box sx={{ marginLeft: 35, marginTop: 10 }}></Box>
      <Component {...customPageProps} />
    </>
  )
}
