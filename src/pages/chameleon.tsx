import React, { Component } from 'react'
import { Button, Heading, Pane } from 'evergreen-ui'
import axios from 'axios'

const axiosClient = axios.create()
export default class Chameleon extends Component<
  {},
  {
    idToShow: string
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      idToShow: 'placeholder',
    }
  }

  async componentDidMount() {
    const { data } = await axios.post(
      'https://app.staging.useresonance.com/api/chameleon/getbestmessages',
      {
        externalUserId: 'jonathan',
      },
      {
        headers: {
          Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
        },
      }
    )

    const castedData = data as {
      [key: string]: {
        content: { [key: string]: string }
        variantId: string
      }
    }

    window.getField = (
      campaignId: string,
      fieldName: string,
      fallback: string
    ): string => {
      const val = castedData?.[campaignId]?.content?.[fieldName]
      return val ? val : fallback
    }

    window.logImpression = (campaignId: string, variantId: string) => {
      console.log(campaignId)
      console.log(variantId)
    }

    const chameleon = require('@chamaeleonidae/chmln')
    chameleon.init(
      'ShKgqpN5FMwCGZIfkx0SPgxWna8Zsn6pVXdPuLrTEADVlN-1TxxhH-FFoTg0sbJ9YYycdj',
      { fastUrl: 'https://fast.chameleon.io/' }
    )

    chameleon.identify('123', {
      email: 'katherine@yourresonate.com',
      name: 'Katya Pioro',
    })
  }

  render() {
    return (
      <div style={{ marginTop: '5vh', textAlign: 'center' }}>
        <div id={this.state.idToShow} />
        <Pane
          display={'flex'}
          padding={16}
          background={'tint2'}
          borderRadius={3}
          style={{ marginTop: -50 }}
        >
          <Heading size={1000} style={{ marginLeft: 250 }}>
            Chameleon
          </Heading>
        </Pane>
        <Button
          onClick={async () => {
            const response = await axiosClient.post(
              'https://app.staging.useresonance.com/api/chameleon/getbestmessages',
              {},
              {
                headers: {
                  Authorization:
                    'Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2',
                },
              }
            )

            const castedData = response.data as { id: string }
            this.setState({ ...this.state, idToShow: castedData.id })
          }}
          style={{ marginTop: 25 }}
        >
          Chameleon!
        </Button>
      </div>
    )
  }
}
