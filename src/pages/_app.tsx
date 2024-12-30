import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import {
  ResonanceCrossChannelClient,
  ResonanceMicrocopyProvider,
} from 'resonance-client'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState<string>('owner')
  const [userId, setUserId] = useState<string>('125126')

  return (
    <>
      <p>Role</p>
      <input onChange={(e) => setRole(e.target.value)} value={role} />

      <p>User ID</p>
      <input onChange={(e) => setUserId(e.target.value)} value={userId} />
      <ResonanceMicrocopyProvider
        apiUrl={'http://localhost:3000'}
        externalUserId={userId}
        apiKey={
          'c04b043b200f6cf9d191fa8826550d62e3e4abe37c6eb86b13aaefa413d0b234dd2742713142812aa0c25188ac587be2'
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
            'b24092e80dcc29fd021da1c7977c37d04995134fd6b6ccb6c0fddf361032581ee8e17b82ff547fce6d8b1afa148d15ad'
          }
          eventContext={{
            'User First Name': 'Jane',
            'User Last Name': 'Doe',
          }}
          userAttributes={{ role }}
          apiUrl={'http://localhost:3000'}
        >
          <Component {...pageProps} />
        </ResonanceCrossChannelClient>
      </ResonanceMicrocopyProvider>
    </>
  )
}
