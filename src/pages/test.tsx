import { Component } from 'react'
import {
  BaseComponentProps,
  logConfirmation,
  logImpression,
  tearDownCampaign,
} from 'resonance-client'
import { Box, Button, Typography, Modal } from '@mui/material'

export default class SimpleModal extends Component<BaseComponentProps, {}> {
  componentDidMount() {
    if (!this.props.isPreview) {
      logImpression()
    }
  }

  render() {
    const { campaignToRender } = this.props
    if (campaignToRender === null) {
      return
    }

    const { variantResult } = campaignToRender
    const { content } = variantResult

    return (
      <Modal
        open={true}
        autoFocus={false}
        aria-labelledby={'modal-modal-header'}
        aria-describedby={'modal-modal-description'}
        onClose={() => tearDownCampaign()}
      >
        <Box>
          <Typography id={'modal-modal-header'} variant={'h6'} component={'h2'}>
            {content['header']}
          </Typography>
          <Typography id={'modal-modal-description'} sx={{ mt: 2 }}>
            {content['description']}
          </Typography>
          <div style={{ marginTop: '5vh' }}>
            <Button
              style={{ float: 'right' }}
              variant={'outlined'}
              color={'primary'}
              onClick={() => {
                logConfirmation()
                tearDownCampaign()
              }}
            >
              {content['first_cta_text']}
            </Button>
            <Button
              color={'success'}
              style={{ float: 'right', marginRight: '1vw' }}
              variant={'outlined'}
              onClick={() => {
                tearDownCampaign()
              }}
            >
              {content['second_cta_text']}
            </Button>
          </div>
        </Box>
      </Modal>
    )
  }
}
