import React, { Component } from 'react'
import { BaseComponentProps, logImpression } from 'resonance-client'
import { Tooltip as ReactTooltip } from 'react-tooltip'

export default class MyTooltip extends Component<BaseComponentProps, {}> {
  componentDidMount() {
    logImpression()
  }

  render(): React.ReactNode {
    const { campaignToRender } = this.props
    if (campaignToRender === null) {
      return
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
      />
    )
  }
}
