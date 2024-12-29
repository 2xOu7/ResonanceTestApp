import { Button, IconButton, Tooltip } from '@mui/material'
import {
  MicrocopyContext,
} from 'resonance-client'
import React, { Component } from 'react'

export default class Home extends Component<{}, { isOpen: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
          return (
            <MicrocopyContext>
              {({copies}) => {
                <Tooltip title={"test"}>
                  <IconButton>
                    <span>test</span>
                  </IconButton>
                </Tooltip>
              }}
            </MicrocopyContext>

          )
  }
}
