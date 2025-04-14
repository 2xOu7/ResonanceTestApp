import React, { Component } from 'react'
import SimpleModal from '../components/Modal'
import Banner from '../components/Banner'
import Tooltip from '@/components/Tooltip'
import { Heading, Pane } from 'evergreen-ui'
import SimpleCornerDialog from '@/components/CornerDialog'
import SimpleSidesheet from '@/components/Sidesheet'
import axios from 'axios'

interface HomeProps {
  role: string
  userId: string
  setRole: (role: string) => void
  setUserId: (role: string) => void
}

interface HomeState {
  isOpen: boolean
}

interface PendoGetBestMessagesElement {
  content: any
  campaignId: string
  pendoGuideId: string
  ruleId: string
  pendoStepId: string
}

interface PendoGuide {
  id: string
  state: string
}

const axiosClient = axios.create()

interface PendoLogImpressionRequest {
  campaignId: string
  externalUserId: string
  userAttributes: { [key: string]: string }
  ruleId: string
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
    script.src = '/pendo-premium-init.js'
    document.body.appendChild(script)

    script.addEventListener('load', async () => {
      // @ts-ignore
      pendo.initialize({
        visitor: {},
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
          <Pane
            display={'flex'}
            padding={16}
            background={'tint2'}
            borderRadius={3}
            style={{ marginTop: -50 }}
          >
            <Heading size={1000} style={{ marginLeft: 250 }}>
              Pendo
            </Heading>
          </Pane>
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
