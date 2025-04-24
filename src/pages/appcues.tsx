import React, { Component } from 'react'
import { Heading, Pane } from 'evergreen-ui'
import axios from 'axios'

export default class Appcues extends Component {
  componentDidMount() {
    if (window.Appcues) {
      axios
        .post(
          'https://app.staging.useresonance.com/api/appcues/getbestmessages',
          {
            externalUserId: 'test_user_id',
            userAttributes: {
              restaurant_type: 'bakery',
              vertical: 'education',
            },
          },
          {
            headers: {
              Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
            },
          }
        )
        .then(({ data }) => {
          const castedData = data as {
            [key: string]: {
              content: { [field: string]: string }
              appcuesFlowId: string
              campaignId: string
              appcuesStepGroupId: string
              appcuesStepId: string
              ruleId: string
            }
          }

          const allCampaignContentKeys: { [field: string]: string } = {}

          Object.keys(castedData).forEach((campaignId: string) => {
            const { content } = castedData[campaignId]
            Object.keys(content).forEach((field: string) => {
              allCampaignContentKeys[`resonance-${campaignId}-${field}`] =
                content[field]
            })
          })

          window.Appcues.on('step_started', function (event: any) {
            console.log(JSON.stringify(event))
          })

          window.Appcues.identify('test_user_id', {
            name: 'Katherine Pioro',
            email: 'katherine@useresonance.com',
            restaurant_type: 'bakery',
            vertical: 'education',
            ...allCampaignContentKeys,
          })

          window.Appcues.page()
        })
        .catch((error) => console.error('Error fetching Appcues data:', error))
    }
  }

  render() {
    return (
      <>
        <Pane
          display="flex"
          padding={16}
          background={'tint2'}
          borderRadius={3}
          style={{ marginTop: -50 }}
        >
          <Heading size={1000} style={{ marginLeft: 250 }}>
            AppCues
          </Heading>
        </Pane>
        <div style={{ marginTop: '5vh', textAlign: 'center' }}></div>
      </>
    )
  }
}
