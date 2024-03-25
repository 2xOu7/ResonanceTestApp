import { Component } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import {
  BaseComponentProps,
  logConfirmation,
  logImpression,
  nonHeadlessMoveToNextStep,
  tearDownCampaign,
} from 'resonance-client'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  tabIndex: '-1',
}

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
        <Box sx={style}>
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
                if (content['first_cta_action'] === 'Confirm') {
                  logConfirmation()
                  tearDownCampaign()
                } else if (content['first_cta_action'] == 'Move To Next Step') {
                  nonHeadlessMoveToNextStep()
                } else {
                  tearDownCampaign()
                }
              }}
            >
              {content['first_cta_text']}
            </Button>
            <Button
              color={'success'}
              style={{ float: 'right', marginRight: '1vw' }}
              variant={'outlined'}
              onClick={() => {
                if (content['second_cta_action'] === 'Confirm') {
                  logConfirmation()
                  tearDownCampaign()
                } else if (
                  content['second_cta_action'] == 'Move To Next Step'
                ) {
                  nonHeadlessMoveToNextStep()
                } else {
                  tearDownCampaign()
                }
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
