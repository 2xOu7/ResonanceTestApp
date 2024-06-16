import { Box, Button, Modal, Typography } from '@mui/material'
import { notifyEvent } from 'resonance-client'
import React, { Component } from 'react'

export default class Home extends Component<{}, { isOpen: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    const chameleon = require('@chamaeleonidae/chmln')
    chameleon.init(
      'S84xJ6DS6NJV1NT6wpgtCJ58XwnSXcoZC9e2IjTaKqCWDl-1ShZoy-FdUvTuEU0fJ4Dtyj',
      { fastUrl: 'https://fast.chameleon.io/' }
    )

    chameleon.identify('123')
  }

  render() {
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
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '5vh' }}>
        <Button
          variant={'outlined'}
          style={{
            backgroundColor: 'deeppink',
            color: 'white',
            marginRight: '1vw',
          }}
          onClick={() => {
            notifyEvent('pink_button_clicked')
          }}
        >
          Pink Button
        </Button>
        <Button
          data-tooltip-id={'blue_button_tooltip'}
          variant={'outlined'}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            marginRight: '1vw',
          }}
          onClick={() => {
            notifyEvent('blue_button_clicked')
          }}
        >
          Blue Button
        </Button>
        <Button
          variant={'outlined'}
          style={{
            backgroundColor: 'green',
            color: 'white',
            marginRight: '1vw',
          }}
          onClick={() => {
            notifyEvent('green_button_clicked')
          }}
        >
          Green Button
        </Button>
        <Button
          data-tooltip-id={'red_button_tooltip'}
          variant={'outlined'}
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={() => {
            this.setState({ isOpen: true })
          }}
        >
          Red Button
        </Button>
        <Modal
          open={this.state.isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  }
}
