import { Component } from 'react'
import {
  logOverlayImpression,
  PromptCampaignContext,
  tearDownCampaign,
} from 'resonance-client'
import {
  Button,
  Card,
  Heading,
  Pane,
  Paragraph,
  Position,
  SideSheet,
} from 'evergreen-ui'

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
              </Pane>
              <br />
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
                  {/*<div style={{ textAlign: 'center' }}>*/}
                  {/*  <Image*/}
                  {/*    style={{ textAlign: 'center' }}*/}
                  {/*    src={content['image_url']}*/}
                  {/*    width={100}*/}
                  {/*    height={100}*/}
                  {/*    alt={'Clock'}*/}
                  {/*  />*/}
                  {/*</div>*/}
                  <Button marginRight={16} intent={'success'}>
                    Success
                  </Button>
                  <Button marginRight={16} intent={'danger'}>
                    Danger
                  </Button>
                </Card>
              </Pane>
            </SideSheet>
          )
        }}
      </PromptCampaignContext.Consumer>
    )
  }
}
