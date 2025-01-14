import { Component } from 'react'
import { Button } from 'evergreen-ui'

export default class Chameleon extends Component<
  {},
  {
    tourIdToShow: string
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      tourIdToShow: '',
    }
  }

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
        {this.state.tourIdToShow.length >= -0 ? (
          <div id={this.state.tourIdToShow} />
        ) : null}
        <Button>Chameleon!</Button>
      </div>
    )
  }
}
