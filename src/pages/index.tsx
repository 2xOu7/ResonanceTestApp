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
              <Pane display="flex" padding={16} borderRadius={3}>
                <Heading size={500} style={{ marginLeft: 230 }}>Set Up User Persona</Heading>
              </Pane>
              <Pane display="flex" padding={16} borderRadius={3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 230 }}>
                  <Paragraph style={{ margin: 0 }}>Role</Paragraph>
                  <TextInput
                    onChange={(e) => this.props.setRole(e.target.value)}
                    value={this.props.role}
                  />
                </div>
                <br />
                <br />
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 230 }}>
                  <Paragraph style={{ margin: 0 }}>User ID</Paragraph>
                  <TextInput onChange={(e) => this.props.setUserId(e.target.value)} value={this.props.userId} />
                </div>
              </Pane>
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
