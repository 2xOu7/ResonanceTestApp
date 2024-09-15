import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import { Resonance } from 'resonance-client'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [role, setRole] = useState<string>('')

  return (
      <>
        <p>Role</p>
        <input onChange={e => setRole(e.target.value)} value={role} />
      <Resonance
        externalUserId={'125'}
        apiKey={'c04b043b200f6cf9d191fa8826550d62e3e4abe37c6eb86b13aaefa413d0b234dd2742713142812aa0c25188ac587be2'}
        eventContext={{
          "User First Name": "Jane",
          "User Last Name": "Doe"
        }}
        userAttributes={{role}}
      >
        <Component {...pageProps} />
      </Resonance>
      </>
  )
}
