import { logConversion, notifyEvent } from 'resonance-client'
import React, { Component } from 'react'
import SimpleModal from '../components/Modal'
import Banner from '../components/Banner'
import Tooltip from '@/components/Tooltip'
import { Button, Card, Heading, Pane, Paragraph, TextInput } from 'evergreen-ui'
import SimpleCornerDialog from '@/components/CornerDialog'
import SimpleSidesheet from '@/components/Sidesheet'
import axios from 'axios'
import { Box } from '@mui/material'

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
    const script = document.createElement('script')
    script.src = '/pendo-init.js'
    document.body.appendChild(script)

    script.addEventListener('load', async () => {

      const { data } = await axios.post('https://app.staging.useresonance.com/api/pendo/getbestmessages', {
          externalUserId: 'jonathan',
        },
        {
          headers: {
            Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
          },
        },
      )
      // @ts-ignore
      pendo.identify({
        visitor: {
          id: 'jonathan',
          email: 'email',
          full_name: 'full_name',
          role: 'role',
          creationDate: 'creationDate',
          resonance: data,
          logFn: () => {
            console.log('log fn')
          },
        },
        account: {
          id: 'id',
          name: 'name',
          is_paying: 'is_paying',
          monthly_value: 'monthly_val',
          planLevel: 'sub_cost',
        },
      })
    })


  }

  render() {
    return (
      <>
        <title>Resonance Test App</title>
        <div style={{ textAlign: 'center' }}>
          <Pane display="flex" padding={16} background="tint2" borderRadius={3} style={{ marginTop: -50 }}>
            <Heading size={1000} style={{ marginLeft: 250 }}>Home</Heading>
          </Pane>
          <Card border="default" style={{ borderRadius: 4 }} elevation={0}>
            <div style={{ margin: 40 }}>
              <Paragraph>Role</Paragraph>
              <TextInput onChange={(e) => this.props.setRole(e.target.value)} value={this.props.role} />
              <br />
              <br />
              <Paragraph>User ID</Paragraph>
              <TextInput onChange={(e) => this.props.setUserId(e.target.value)} value={this.props.userId} />
            </div>
          </Card>
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
                style={{ backgroundColor: 'purple', color: 'white' }}
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
