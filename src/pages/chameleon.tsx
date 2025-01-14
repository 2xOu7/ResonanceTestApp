import { Component } from 'react'
import { Button } from 'evergreen-ui'

export default class Chameleon extends Component<{}, {}> {
  componentDidMount() {
    const chameleon = require('@chamaeleonidae/chmln')
    chameleon.init(
      'ShKgqpN5FMwCGZIfkx0SPgxWna8Zsn6pVXdPuLrTEADVlN-1TxxhH-FFoTg0sbJ9YYycdj',
      { fastUrl: 'https://fast.chameleon.io/' }
    )

    chameleon.identify('123', {
      email: 'katherine@yourresonate.com',
      name: 'Katya Pioro',
    })
  }

  render() {
    return (
      <div style={{ marginTop: '5vh', textAlign: 'center' }}>
        <div id={'placeholder'} style={{ display: 'none' }} />
        <Button>Chameleon!</Button>
      </div>
    )
  }
}
