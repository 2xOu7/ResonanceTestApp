import { Component } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import {
  BaseComponentProps,
  logConfirmation,
  logImpression,
  tearDownCampaignById,
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
    const { props } = content
    const parsedContent = JSON.parse(props ?? '{}')

    return (
      <Modal
        open={true}
        autoFocus={false}
        aria-labelledby={'modal-modal-header'}
        aria-describedby={'modal-modal-description'}
        onClose={() =>
          tearDownCampaignById(this.props.campaignToRender.campaignId)
        }
      >
        <Box sx={style}>
          <Typography id={'modal-modal-header'} variant={'h6'} component={'h2'}>
            {parsedContent['header']}
          </Typography>
          <Typography id={'modal-modal-description'} sx={{ mt: 2 }}>
            {parsedContent['description']}
          </Typography>
          <div style={{ marginTop: '5vh' }}>
            <Button
              style={{ float: 'right' }}
              variant={'outlined'}
              color={'primary'}
              onClick={() => {
                logConfirmation()
                tearDownCampaignById(this.props.campaignToRender.campaignId)
              }}
            >
              {parsedContent['first_cta_text']}
            </Button>
            <Button
              color={'success'}
              style={{ float: 'right', marginRight: '1vw' }}
              variant={'outlined'}
              onClick={() => {
                tearDownCampaignById(this.props.campaignToRender.campaignId)
              }}
            >
              {parsedContent['second_cta_text']}
            </Button>
          </div>
        </Box>
      </Modal>
    )
  }
}
