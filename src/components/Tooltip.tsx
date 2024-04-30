import React, { Component } from 'react'
import { logImpression, PromptCampaignContext } from 'resonance-client'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Button } from '@mui/material'

export default class MyTooltip extends Component<{}, {}> {
  componentDidMount() {
    logImpression()
  }

  render(): React.ReactNode {
    return (
      <PromptCampaignContext.Consumer>
        {({ campaignToRender }) => {
          if (
            campaignToRender === null ||
            campaignToRender.campaignFormat !== 'Tooltip'
          ) {
            return null
          }

          const { variantResult } = campaignToRender
          const { content } = variantResult
          return (
            <ReactTooltip
              content={content['header']}
              style={{ fontSize: '12px' }}
              id={content['selector']}
              place={'right-end'}
              isOpen={true}
            >
              <Button>{content['cta_text']}</Button>
            </ReactTooltip>
          )
        }}
      </PromptCampaignContext.Consumer>
    )
  }
}
