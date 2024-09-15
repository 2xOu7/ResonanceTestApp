import { Button } from '@mui/material'
import { notifyEvent } from 'resonance-client'
import React, { Component } from 'react'
import userflow from 'userflow.js'
import SimpleModal from '../components/NonHeadlessSimpleModal'

export default class Home extends Component<{}, { isOpen: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
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
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={() => {
            notifyEvent('Doctor Sends Reminder')
          }}
        >
          Send Reminder
        </Button>
        <SimpleModal />
      </div>
    )
  }
}
