import { Component } from 'react'
import { logOverlayImpression, PromptCampaignContext } from 'resonance-client'
import { Card, Heading, Pane, Position, SideSheet } from 'evergreen-ui'
import Image from 'next/image'

export default class SimpleSidesheet extends Component<{}, {}> {
  render() {
    return (
      <PromptCampaignContext.Consumer>
        {({ campaignToRender }) => {
          if (
            campaignToRender === null ||
            campaignToRender.campaignFormat !== 'Sidesheet'
          ) {
            return null
          }

          logOverlayImpression()
          const { variantResult } = campaignToRender
          const { content } = variantResult

          return (
            <SideSheet isShown={true} position={Position.BOTTOM}>
              <Pane>
                <div style={{ textAlign: 'center' }}>
                  <Image
                    style={{ textAlign: 'center' }}
                    src={content['image_url']}
                    width={100}
                    height={100}
                    alt={'Clock'}
                  />
                </div>
                <br />
              </Pane>
              <Pane
                flex={'1'}
                overflowY={'scroll'}
                background={'tint1'}
                padding={16}
              >
                <Card
                  backgroundColor={'white'}
                  elevation={0}
                  height={240}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Heading>{content['title']}</Heading>
                </Card>
              </Pane>
            </SideSheet>
          )
        }}
      </PromptCampaignContext.Consumer>
    )
  }
}
