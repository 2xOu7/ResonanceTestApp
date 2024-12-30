import { Button, IconButton, Tooltip } from '@mui/material'
import {
  PromptCampaignContext,
} from 'resonance-client'
import React, { Component } from 'react'

interface PromptCampaignContextType {
  campaignToRender: {
    campaignFormat: string;
    variantResult: {
      content: {
        header?: string;
        [key: string]: any;
      };
    };
  } | null;
}

export default class SimpleTooltip extends Component<{}, { isOpen: boolean; tooltipMessage: string | null }> {
  static contextType = PromptCampaignContext;
  declare context: PromptCampaignContextType;

  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
      tooltipMessage: null,
    }
  }

  componentDidMount() {
    const campaignToRender = this.context.campaignToRender;

    if (
      campaignToRender === null ||
      campaignToRender.campaignFormat !== 'Tooltip'
    ) {
      return;
    }

    const { variantResult } = campaignToRender;
    const { content } = variantResult;
    const title = content['header'] || null;

    if (title !== this.state.tooltipMessage) {
      this.setState({ tooltipMessage: title });
    }
  }

  render() {
    const { tooltipMessage } = this.state;

    return (
      <Tooltip title={tooltipMessage ?? 'Default Tooltip Message'}>
        <IconButton>
          <span>test</span>
        </IconButton>
      </Tooltip>
    )
  }
}
