import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import {
  ResonanceConversionLogger,
  ResonanceCrossChannelClient,
  ResonanceMicrocopyProvider,
} from 'resonance-client'
import React, { useEffect, useState } from 'react'
import { Paragraph, TextInput } from 'evergreen-ui'
import Sidebar from '@/components/Sidebar'
import { Box } from '@mui/material'
import { Intercom, update } from '@intercom/messenger-js-sdk'

export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState<string>('owner')
  const [userId, setUserId] = useState<string>(
    'db97b059-cbe8-454b-9ab1-7ee38499222e',
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
      });
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
      <Box sx={{ marginLeft: 35, marginTop: 10 }}>

      </Box>
      <ResonanceConversionLogger
        apiUrl={'https://app.staging.useresonance.com'}
        externalUserId={userId}
        apiKey={
          '3b2a055a03b91b08fe1af786ece89a9046ed5f64cecda06f533dadd1907d8e20b4d4e4dc7632719213dd71bd80d5074d'
        }
        userAttributes={{ role }}
      />
      <ResonanceMicrocopyProvider
        apiUrl={'https://app.staging.useresonance.com'}
        externalUserId={userId}
        apiKey={
          '3b2a055a03b91b08fe1af786ece89a9046ed5f64cecda06f533dadd1907d8e20b4d4e4dc7632719213dd71bd80d5074d'
        }
        eventContext={{
          'User First Name': 'Jane',
          'User Last Name': 'Doe',
        }}
        userAttributes={{ role }}
      >
        <ResonanceCrossChannelClient
          externalUserId={userId}
          apiKey={
            '3b2a055a03b91b08fe1af786ece89a9046ed5f64cecda06f533dadd1907d8e20b4d4e4dc7632719213dd71bd80d5074d'
          }
          eventContext={{
            'User First Name': 'Jane',
            'User Last Name': 'Doe',
          }}
          userAttributes={{ role }}
          apiUrl={'https://app.staging.useresonance.com'}
        >
          <Component {...customPageProps} />
        </ResonanceCrossChannelClient>
      </ResonanceMicrocopyProvider>
    </>
  )
}
