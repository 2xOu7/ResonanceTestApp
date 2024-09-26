import { Component } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import {
  MicrocopyContext,
} from 'resonance-client'
import { Button } from '@mui/material'

export default class SimpleModal extends Component<{}, {}> {
  render() {
    return (
      <MicrocopyContext.Consumer>
        {({ copies }) => {
          const copiesToFilter = copies.filter(c => c.format === 'Tile Below Application Settings Tab')

          if (
            copiesToFilter.length <= 0
          ) {
            return null
          }

          const copy = copiesToFilter[0]

          return <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
            <Alert severity={"info"}>
              <Typography variant={"body1"}>
                {copy.variant.content['description']}
              </Typography>
              <Button>
                {copy.variant.content['cta']}
              </Button>
            </Alert>
          </Box>

        }}
      </MicrocopyContext.Consumer>
    )
  }
}
