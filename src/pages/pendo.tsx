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
  content:  any
  campaignId: string
  pendoGuideId: string
  variantName: string
}

interface PendoGuide {
  guideId: string
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
    script.src = '/pendo-init.js'
    document.body.appendChild(script)

    script.addEventListener('load', async () => {
      const response = await axios.post<{ [key: string]: PendoGetBestMessagesElement }>(
        'https://app.staging.useresonance.com/api/pendo/getbestmessages',
        {
          externalUserId: 'jonathan',
        },
        {
          headers: {
            Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
          },
        }
      );

      const { data } = response

      // @ts-ignore
      pendo.initialize({
        visitor: {
          id: 'user-id', // Required if user is signed in. Should be human-readable (for example, email or username) because it's used in Pendo reports.
          // is_paying:    // Recommended if using Pendo Feedback
          // email:        // Recommended if using Pendo Feedback or NPS Email
          // full_name:    // Recommended if using Pendo Feedback
          // role:         // Optional

          // You can add any additional visitor-level key values here,
          // as long as it's not one of the above reserved names.
        },

        account: {
          id: "acc-id // Highly recommended; required if using Pendo Feedback. Should be human-readable (for example, company name) because it's used in Pendo reports.",
          // is_paying:    // Recommended if using Pendo Feedback
          // monthly_value:// Recommended if using Pendo Feedback
          // planLevel:    // Optional
          // planPrice:    // Optional
          // creationDate: // Optional

          // You can add any additional account-level key values here,
          // as long as it's not one of the above reserved names.
        },

        guides: {
          globalScripts: [
            {
              script: async function (step: any, guide: PendoGuide) {
                const guides = Object.keys(data).map(d => data[d]).filter((element: PendoGetBestMessagesElement) => {
                  return element.pendoGuideId === guide.guideId && guide.state === 'public'
                })

                if (guides.length > 0) {
                  const resonanceGuideObj = guides[0]

                  const response = await axiosClient.post(
                    'https://app.staging.useresonance.com/api/pendo/logImpression',
                    {
                      campaignId: resonanceGuideObj.campaignId,
                      variantId: data.variantId,
                      externalUserId: 'user-id',
                      userAttributes: {}
                    },
                    {
                      headers: {
                        Authorization:
                          'Bearer 3b2a055a03b91b08fe1af786ece89a9046ed5f64cecda06f533dadd1907d8e20b4d4e4dc7632719213dd71bd80d5074d',
                      },
                    }
                  )
                }
              },
              // Only run this on a specific known step id
              test: function(step: any, guide: any) {
                console.log(guide)
                console.log(step)
                return true
              },
            },
          ],
        },
      })

      // @ts-ignore
      pendo.identify({
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
