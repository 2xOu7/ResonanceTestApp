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
      apiKey={'39eaf65b62a49a1e5efba6c32a14b083b8adf79d63ec417fcbcb41a10704116e0dbf6b1163c9a69981349f91ff23b890'}
      eventContext={{}}
    >
      <Resonance
        externalUserId={'124'}
        apiKey={'39eaf65b62a49a1e5efba6c32a14b083b8adf79d63ec417fcbcb41a10704116e0dbf6b1163c9a69981349f91ff23b890'}
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
