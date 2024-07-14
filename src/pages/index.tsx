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

  async componentDidMount() {
    userflow.init('ct_h7n2jn3xtndateqe4prm6gifye')
    await userflow.identify('123', {
      name: 'piggy',
      email: 'piggy@gmail.com',
      signed_up_at: '06/19/2024',
    })

    const chameleon = require('@chamaeleonidae/chmln')
    chameleon.init(
      'S84xJ6DS6NJV1NT6wpgtCJ58XwnSXcoZC9e2IjTaKqCWDl-1ShZoy-FdUvTuEU0fJ4Dtyj',
      { fastUrl: 'https://fast.chameleon.io/' }
    )

    chameleon.identify('123')
  }

  handleClose = () => {
    this.setState({ isOpen: false })
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
            notifyEvent('pink_button_clicked')
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
            notifyEvent('blue_button_clicked')
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
            notifyEvent('green_button_clicked')
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
