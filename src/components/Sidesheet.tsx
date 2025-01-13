import { Component } from 'react'
import {
  logOverlayImpression,
  PromptCampaignContext,
  tearDownCampaign,
} from 'resonance-client'
import {
  Button,
  Heading,
  Pane,
  Paragraph,
  Position,
  SideSheet,
} from 'evergreen-ui'
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
            <SideSheet
              isShown={true}
              position={Position.BOTTOM}
              onCloseComplete={() => {
                tearDownCampaign()
              }}
            >
              <br />
              <Pane padding={16} borderBottom={'muted'}>
                <Heading size={600}>{content['header']}</Heading>
                <Paragraph size={400} color={'muted'}>
                  {content['description']}
                </Paragraph>
                <br />
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
                <Button marginRight={16}>Upgrade Today</Button>
              </Pane>
              <br />
            </SideSheet>
          )
        }}
      </PromptCampaignContext.Consumer>
    )
  }
}
