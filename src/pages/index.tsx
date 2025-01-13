import { logConversion, notifyEvent } from 'resonance-client'
import React, { Component } from 'react'
import SimpleModal from '../components/Modal'
import Banner from '../components/Banner'
import Tooltip from '@/components/Tooltip'
import { Button } from 'evergreen-ui'
import SimpleCornerDialog from '@/components/CornerDialog'

export default class Home extends Component<{}, { isOpen: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <>
        <title>Resonance Test App</title>
        <div style={{ textAlign: 'center', marginTop: '5vh' }}>
          <Button
            style={{
              backgroundColor: 'deeppink',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Pink Button Clicked')
            }}
          >
            Pink Button
          </Button>
          <Button
            data-tooltip-id={'blue_button_tooltip'}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Blue Button Clicked')
            }}
          >
            Blue Button
          </Button>
          <Button
            style={{
              backgroundColor: 'green',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Green Button Clicked')
            }}
          >
            Green Button
          </Button>
          <Button
            id={'red_button'}
            data-tooltip-id={'red_button_tooltip'}
            style={{
              backgroundColor: 'red',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Doctor Sends Reminder')
            }}
          >
            Red Button
          </Button>
          <Button
            id={'purple_button'}
            data-tooltip-id={'purple_button_tooltip'}
            style={{ backgroundColor: 'purple', color: 'white' }}
            onClick={() => {
              logConversion('Conversion Log')
            }}
          >
            Log Conversion
          </Button>
          <SimpleModal />
          <br />
          <br />
          <Banner />
          <br />
          <Tooltip />
          <br />
          <SimpleCornerDialog />
        </div>
      </>
    )
  }
}
