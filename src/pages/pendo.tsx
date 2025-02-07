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
      const { data } = await axios.post(
        'https://app.staging.useresonance.com/api/pendo/getbestmessages',
        {
          externalUserId: 'jonathan',
        },
        {
          headers: {
            Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
          },
        }
      )

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
              script: async function (step: any, guide: any) {
                console.log(guide)
              },
              // Only run this on a specific known step id
              test: function (step: any, guide: any) {
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
            display="flex"
            padding={16}
            background="tint2"
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
