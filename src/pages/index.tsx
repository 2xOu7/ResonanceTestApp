import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from '@mui/material'
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

  handleClickOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
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
        <Dialog
          open={this.state.isOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Disagree</Button>
            <Button onClick={this.handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
