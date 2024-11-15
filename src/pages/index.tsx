import { Button } from '@mui/material'
import {logConversion, notifyEvent} from 'resonance-client'
import React, { Component } from 'react'
import SimpleModal from '../components/NonHeadlessSimpleModal'
import SimpleBanner from '../components/SimpleBanner'

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
            variant={'outlined'}
            style={{
              backgroundColor: 'deeppink',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Pink Button Clicked')
            }}
          >
            View Custom Report
          </Button>
          <Button
            data-tooltip-id={'blue_button_tooltip'}
            variant={'outlined'}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Blue Button Clicked')
            }}
          >
            Send Survey
          </Button>
          <Button
            variant={'outlined'}
            style={{
              backgroundColor: 'green',
              color: 'white',
              marginRight: '1vw',
            }}
            onClick={() => {
              notifyEvent('Green Button Clicked')
            }}
          >
            Send Chat
          </Button>
          <Button
            id={'red_button'}
            data-tooltip-id={'red_button_tooltip'}
            variant={'outlined'}
            style={{ backgroundColor: 'red', color: 'white',marginRight: '1vw'}}
            onClick={() => {
              notifyEvent('Doctor Sends Reminder')
            }}
          >
            Send Reminder
          </Button>
            <Button
                id={'purple_button'}
                data-tooltip-id={'purple_button_tooltip'}
                variant={'outlined'}
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
          <SimpleBanner />
        </div>
      </>
    )
  }
}
