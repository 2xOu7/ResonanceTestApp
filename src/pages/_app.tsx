import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import { ResonanceMicrocopyProvider } from 'resonance-client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResonanceMicrocopyProvider
      externalUserId={'123'}
      apiKey={'603971ba-d787-45c0-8d88-a10053bf1616'}
      userAttributes={{ user_locale: 'usa' }}
    >
      <Component {...pageProps} />
    </ResonanceMicrocopyProvider>
  )
}
