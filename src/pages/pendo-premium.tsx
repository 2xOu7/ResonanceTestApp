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
  variantName: string
  pendoStepId: string
}

interface PendoGuide {
  id: string
  state: string
}

const axiosClient = axios.create()

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
      const response = await axios.post<{
        [key: string]: PendoGetBestMessagesElement
      }>(
        'https://app.staging.useresonance.com/api/pendo/getbestmessages', // substitute in your url
        {
          externalUserId: 'jonathan',
          userAttributes: { test: 'test' },
        },
        {
          headers: {
            Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`, //substitute in your api key
          },
        }
      )

      const { data } = response

      // @ts-ignore
      pendo.initialize({
        visitor: {
          id: 'jonathan',
          email: 'email',
          full_name: 'full_name',
          role: 'role',
          creationDate: 'creationDate',
          resonance: data,
        },
        account: {
          id: 'id',
          name: 'name',
          is_paying: 'is_paying',
          monthly_value: 'monthly_val',
          planLevel: 'sub_cost',
        },

        guides: {
          globalScripts: [
            {
              script: async function (step: any, guide: PendoGuide) {
                console.log('step', step)

                if (guide.state !== 'public') {
                  return
                }
                const guides = Object.keys(data)
                  .map((d) => data[d])
                  .filter((element: PendoGetBestMessagesElement) => {
                    return (
                      element.pendoGuideId === guide.id &&
                      element.pendoStepId === step.id
                    )
                  })

                if (guides.length > 0) {
                  const resonanceGuideObj = guides[0]

                  await axiosClient.post(
                    'https://app.staging.useresonance.com/api/pendo/logExposure', // Substitute in your url
                    {
                      campaignId: resonanceGuideObj.campaignId,
                      variantName: resonanceGuideObj.variantName,
                      externalUserId: 'user-id', // Substitute your external user id; i.e. visitor id
                      userAttributes: { test: 'test' }, // Substitute your user attributes; i.e. what you pass into the visitor object
                    },
                    {
                      headers: {
                        Authorization:
                          'Bearer 3b2a055a03b91b08fe1af786ece89a9046ed5f64cecda06f533dadd1907d8e20b4d4e4dc7632719213dd71bd80d5074d', // substitute your api key
                      },
                    }
                  )
                }
              },
              // Only run this on a specific known step id
              test: function (_step: any, guide: PendoGuide) {
                console.log(arguments)
                if (guide.state !== 'public') {
                  return false
                }
                const guides = Object.keys(data)
                  .map((d) => data[d])
                  .filter((element: PendoGetBestMessagesElement) => {
                    return element.pendoGuideId === guide.id
                  })

                return guides.length > 0
              },
            },
          ],
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
