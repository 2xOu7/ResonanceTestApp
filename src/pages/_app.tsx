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
import Sidebar from '@/components/Sidebar'
import { Box } from '@mui/material'
import { Intercom, startTour } from '@intercom/messenger-js-sdk'
import axios from 'axios'

export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState<string>('owner')
  const [userId, setUserId] = useState<string>(
    'db97b059-cbe8-454b-9ab1-7ee38499222e',
  )
  const [campaigns, setCampaigns] = useState<any>('hi')
  const intercomUserId = "1234533"


  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.post(
          'https://app.staging.useresonance.com/api/pendo/getbestmessages',
          // 'http://localhost:3000/api/intercom/getbestmessages',
          { externalUserId: userId },
          {
            headers: {
              Authorization: `Bearer 853d219b70987077dd4678e2a94cd0eb9ead430ce6e7013233044a83bd37836a391032cb5a58128e47bb57b8b8b8e19b`,
              // Authorization: `Bearer 604ff7f2189caab413683c9bb62c965644b2990d88006d745fd9acf13150d7a4527c77a8dcb2da2fa47ceccf3ac3016c`,
            },
          }
        );
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages()
  }, [userId]); // Dependency array ensures re-run when userId changes

  useEffect(() => {

    const variantName = campaigns[campaignId]

    Intercom({
      app_id: 'y52bz4ne',
      user_id: intercomUserId,
      name: 'katherinep',
      email: 'katherinee@useresonance.comm',
      created_at: 123,
      custom_attribute: 'testing', // make chosenVariant
      resonance: campaigns,
      variantName: variantName,
    });

    startTour('589934')

    // update({
    //   app_id: 'y52bz4ne',
    //   user_id: '123',
    //   name: 'katherine',
    //   email: 'katherine@useresonance.com',
    //   created_at: 123,
    //   custom_attribute: 'test',
    //   resonance: "123"
    // })
  }, [campaigns])

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
        // apiUrl={'http://localhost:3000'}
        externalUserId={userId}
        apiKey={
          '853d219b70987077dd4678e2a94cd0eb9ead430ce6e7013233044a83bd37836a391032cb5a58128e47bb57b8b8b8e19b'
        }
        userAttributes={{ role }}
      />
      <ResonanceMicrocopyProvider
        apiUrl={'https://app.staging.useresonance.com'}
        // apiUrl={'http://localhost:3000'}
        externalUserId={userId}
        apiKey={
          '853d219b70987077dd4678e2a94cd0eb9ead430ce6e7013233044a83bd37836a391032cb5a58128e47bb57b8b8b8e19b'
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
            '853d219b70987077dd4678e2a94cd0eb9ead430ce6e7013233044a83bd37836a391032cb5a58128e47bb57b8b8b8e19b'
          }
          eventContext={{
            'User First Name': 'Jane',
            'User Last Name': 'Doe',
          }}
          userAttributes={{ role }}
          apiUrl={'https://app.staging.useresonance.com'}
          // apiUrl={'http://localhost:3000'}
        >
          <Component {...customPageProps} />
        </ResonanceCrossChannelClient>
      </ResonanceMicrocopyProvider>
    </>
  )
}
