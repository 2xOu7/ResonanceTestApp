import { Component } from 'react'
import { Heading } from 'evergreen-ui'

export default class Appcues extends Component<{}, {}> {
  componentDidMount() {
    if (window.Appcues) {
      window.Appcues.identify(
        'test_user_id', // Replace with actual user ID
        {
          // Add any user properties you want to track
          name: 'Jonathan Ou',
          email: 'jonathan@useresonance.com',
        }
      )
    }
  }

  render() {
    return (
      <div style={{ marginTop: '5vh', textAlign: 'center' }}>
        <Heading>Appcues!</Heading>
      </div>
    )
  }
}
