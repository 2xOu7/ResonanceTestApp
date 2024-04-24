import { Button } from '@mui/material'
import {
  notifyEvent,
  Resonance,
  ResonanceFormatComponentContainer,
} from 'resonance-client'
import NonHeadlessSimpleModal from '../components/NonHeadlessSimpleModal'
import Tooltip from '../components/Tooltip'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5vh' }}>
      <Resonance
        apiKey={'603971ba-d787-45c0-8d88-a10053bf1616'}
        eventContext={{}}
        externalUserId={'123'}
        userAttributes={{ user_locale: 'usa' }}
      />
      <Button
        variant={'outlined'}
        style={{
          backgroundColor: 'deeppink',
          color: 'white',
          marginRight: '1vw',
        }}
        onClick={() => {
          notifyEvent('pink_button_clicked')
        }}
      >
        Pink Button
      </Button>
      <Button
        data-tooltip-id={'blue_button_tooltip'}
        variant={'outlined'}
        style={{ backgroundColor: 'blue', color: 'white', marginRight: '1vw' }}
        onClick={() => {
          notifyEvent('blue_button_clicked')
        }}
      >
        Blue Button
      </Button>
      <Button
        variant={'outlined'}
        style={{ backgroundColor: 'green', color: 'white', marginRight: '1vw' }}
        onClick={() => {
          notifyEvent('green_button_clicked')
        }}
      >
        Green Button
      </Button>
      <Button
        data-tooltip-id={'red_button_tooltip'}
        variant={'outlined'}
        style={{ backgroundColor: 'red', color: 'white' }}
        onClick={() => {
          notifyEvent('red_button_clicked')
        }}
      >
        Red Button
      </Button>
      <ResonanceFormatComponentContainer campaignFormat={'Modal'}>
        <NonHeadlessSimpleModal campaignToRender={null} isPreview={false} />
      </ResonanceFormatComponentContainer>
      <ResonanceFormatComponentContainer campaignFormat={'Tooltip'}>
        <Tooltip campaignToRender={null} isPreview={false} />
      </ResonanceFormatComponentContainer>
    </div>
  )
}
