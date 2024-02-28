import { Button } from '@mui/material'
import {
  notifyEvent,
  Resonance,
  ResonanceHeadlessComponentContainer,
  ResonanceFormatComponentContainer,
} from 'resonance-client'
import SimpleModal from '../components/SimpleModal'
import NonHeadlessSimpleModal from '../components/NonHeadlessSimpleModal'

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
        variant={'outlined'}
        style={{ backgroundColor: 'red', color: 'white' }}
        onClick={() => {
          notifyEvent('red_button_clicked')
        }}
      >
        Red Button
      </Button>
      <ResonanceHeadlessComponentContainer
        campaignId={'c101ba0e-49b4-45cb-b99c-cd6a833c480f'}
      >
        <SimpleModal campaignToRender={null} isPreview={false} />
      </ResonanceHeadlessComponentContainer>
      <ResonanceFormatComponentContainer
        campaignFormat={'Modal'}
        slot={'full_screen'}
      >
        <NonHeadlessSimpleModal campaignToRender={null} isPreview={false} />
      </ResonanceFormatComponentContainer>
    </div>
  )
}
