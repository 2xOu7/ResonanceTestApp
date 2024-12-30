
import { Button, IconButton, Tooltip } from '@mui/material'
import {
  logMicrocopyImpression,
  logOverlayImpression,
  MicrocopyContext,
  PromptCampaignContext,
} from 'resonance-client'
import React, { Component } from 'react'

const TooltipTitle: React.FC<{ getContent: (content: string | null) => void }> = ({ getContent }) => {
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

        const title = content['header'] || null
        getContent(title) // Pass title back to the parent
        return null
      }}
    </PromptCampaignContext.Consumer>
  )
}

export default class SimpleTooltip extends Component<{}, { isOpen: boolean; tooltipMessage: string | null }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
      tooltipMessage: null,
    }
  }

  render() {
    const { tooltipMessage } = this.state

    return (
      <>
        <TooltipTitle
          getContent={(message: string | null) => this.setState({ tooltipMessage: message })}
        />
        <Tooltip title={tooltipMessage ?? 'Default Tooltip Message'}>
          <IconButton>
            <span>test</span>
          </IconButton>
        </Tooltip>
      </>
    )
  }
}