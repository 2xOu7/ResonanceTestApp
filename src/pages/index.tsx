import { logConversion, notifyEvent } from 'resonance-client'
import React, { Component } from 'react'
import SimpleModal from '../components/Modal'
import Banner from '../components/Banner'
import Tooltip from '@/components/Tooltip'
import { Button } from 'evergreen-ui'
import SimpleCornerDialog from '@/components/CornerDialog'
import SimpleSidesheet from '@/components/Sidesheet'

export default class Home extends Component<{}, { isOpen: boolean, chameleonClient: any }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
      chameleonClient: undefined
    }
  }

  componentDidMount() {
    const chmln = require('@chamaeleonidae/chmln');
    chmln.init('SpovY7xd2fqt2P5y8EXp9B4YETcGR2iYVGr3v11i78stEe-1TxxPk-FFoTg0sbJ9YYycdj', {
      fastUrl: 'https://fast.chameleon.io/'
    });
    this.setState({...this.state, chameleonClient: chmln})
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
              this.state.chameleonClient.show('6785d7f651e673002d052e39')
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
          <br />
          <br />
          <Banner />
          <Tooltip />
          <SimpleCornerDialog />
          <SimpleSidesheet />
          <SimpleModal />
        </div>
      </>
    )
  }
}
