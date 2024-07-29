import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import { ResonanceMicrocopyProvider, Resonance } from 'resonance-client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResonanceMicrocopyProvider
      externalUserId={'124'}
      apiKey={'603971ba-d787-45c0-8d88-a10053bf1616'}
      eventContext={{}}
    >
      <Resonance
        externalUserId={'124'}
        apiKey={'603971ba-d787-45c0-8d88-a10053bf1616'}
        eventContext={{
          "User First Name": "Jane",
          "User Last Name": "Doe"
        }}
      >
        <Component {...pageProps} />
      </Resonance>
    </ResonanceMicrocopyProvider>
  )
}
