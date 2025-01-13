import React, { Component } from 'react'
import {
  logMicrocopyConfirmation,
  logMicrocopyImpression,
  MicrocopyContext,
} from 'resonance-client'
import { Button, Card, Heading, Pane } from 'evergreen-ui'
import Image from 'next/image'

export default class Banner extends Component<{}, {}> {
  render() {
    return (
      <MicrocopyContext.Consumer>
        {({ copies }) => {
          const copiesToFilter = copies.filter(
            (c) => c.format === 'Tile Below Application Settings Tab'
          )

          if (copiesToFilter.length <= 0) {
            return null
          }

          const copy = copiesToFilter[0]
          logMicrocopyImpression(
            copy.campaignId,
            copy.variant.variantId,
            copy.variant.variantName
          )

          return (
            <Pane flex={'1'} overflowY={'scroll'} padding={16}>
              <Card
                background={'tint1'}
                backgroundColor={'white'}
                elevation={0}
              >
                <br />
                <Heading>{copy.variant.content['title']}</Heading>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <Image
                    style={{ textAlign: 'center' }}
                    src={copy.variant.content['image_url']}
                    width={100}
                    height={100}
                    alt={'Clock'}
                  />
                </div>
                <br />
                <Heading size={'200'}>
                  {copy.variant.content['description']}
                </Heading>
                <br />
                <Button
                  onClick={() => {
                    logMicrocopyConfirmation(
                      copy.campaignId,
                      copy.variant.variantId,
                      copy.variant.variantName
                    )
                  }}
                >
                  {copy.variant.content['button_text']}
                </Button>
                <br />
                <br />
              </Card>
            </Pane>
          )
        }}
      </MicrocopyContext.Consumer>
    )
  }
}
