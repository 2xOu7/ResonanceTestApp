import { Component } from 'react'
import { logOverlayImpression, PromptCampaignContext } from 'resonance-client'
import { Tooltip } from 'react-tooltip'


export default class SimpleTooltip extends Component<{},{}> {

    constructor(props: {}){
        super(props)
    }

    render(){
        return (
            <PromptCampaignContext.Consumer>
                {({ campaignToRender }) => {
                    if (
                        campaignToRender === null ||
                        campaignToRender.campaignFormat !== 'Tooltip'
                    ) {
                        return null
                    }

                    logOverlayImpression()
                    const { variantResult } = campaignToRender
                    const { content } = variantResult

                    return (
                        <Tooltip id={content['selector']} content={content['header']} isOpen={true} />
                    )
                }}
            </PromptCampaignContext.Consumer>
        )
    }
}
