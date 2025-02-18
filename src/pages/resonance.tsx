import { logConversion, notifyEvent } from 'resonance-client'
import React, { Component } from 'react'
import SimpleModal from '../components/Modal'
import Banner from '../components/Banner'
import Tooltip from '@/components/Tooltip'
import { Button, Card, Heading, Pane, Paragraph, TextInput } from 'evergreen-ui'
import SimpleCornerDialog from '@/components/CornerDialog'
import SimpleSidesheet from '@/components/Sidesheet'
import { init, track } from '@amplitude/analytics-node'

interface HomeProps {
  role: string
  userId: string
  setRole: (role: string) => void
  setUserId: (role: string) => void
}

interface HomeState {
  isOpen: boolean;
}

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    init('262fda914083ea80d83dcc156506fb8e')
    track('Button Clicked', undefined, {
      user_id: 'user@amplitude.com',
    });
  }


  render() {
    return (
      <>
        <title>Resonance Test App</title>
        <div style={{ textAlign: 'center' }}>
          <Pane display="flex" padding={16} background="tint2" borderRadius={3} style={{ marginTop: -50 }}>
            <Heading size={1000} style={{ marginLeft: 250 }}>Resonance</Heading>
          </Pane>
          <Card border="default" style={{ borderRadius: 4 }} elevation={0}>
            <div style={{ margin: 40 }}>
              <Button
                style={{
                  backgroundColor: '#EE9191',
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
                  backgroundColor: '#5C85FF',
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
                  backgroundColor: '#52BD95',
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
                  backgroundColor: '#D14343',
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
                style={{ backgroundColor: '#6E62B6', color: 'white' }}
                onClick={() => {
                  logConversion('Conversion Log')
                }}
              >
                Log Conversion
              </Button>
            </div>
          </Card>
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
