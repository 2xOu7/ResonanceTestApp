import { Component } from 'react'
import {
  logOverlayImpression,
  PromptCampaignContext,
  tearDownCampaign,
} from 'resonance-client'
import { Dialog, Pane, Paragraph } from 'evergreen-ui'
import Image from 'next/image'

export default class SimpleModal extends Component<{}, {}> {
  render() {
    return (
      <PromptCampaignContext.Consumer>
        {({ campaignToRender }) => {
          if (
            campaignToRender === null ||
            campaignToRender.campaignFormat !== 'Modal'
          ) {
            return null
          }

          logOverlayImpression()
          const { variantResult } = campaignToRender
          const { content } = variantResult

          return (
            <Dialog
              isShown={true}
              title={<p style={{ textAlign: 'center' }}>{content['header']}</p>}
              onCloseComplete={() => tearDownCampaign()}
              confirmLabel={content['first_cta_text']}
              cancelLabel={content['second_cta_text']}
              onConfirm={() => {
                logOverlayImpression()
                tearDownCampaign()
              }}
              onCancel={() => {
                tearDownCampaign()
              }}
            >
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

                <Paragraph style={{ textAlign: 'center' }}>
                  {content['description']}
                </Paragraph>
              </Pane>
            </Dialog>
          )
        }}
      </PromptCampaignContext.Consumer>
    )
  }
}
