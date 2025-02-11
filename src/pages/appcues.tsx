import React, { Component } from 'react'
import { Heading, Pane } from 'evergreen-ui'

export default class Appcues extends Component<{}, {}> {
  componentDidMount() {
    if (window.Appcues) {
      window.Appcues.identify(
        'test_user_id', // Replace with actual user ID
        {
          // Add any user properties you want to track
          name: 'Katherine Pioro',
          email: 'katherine@useresonance.com',
        }
      )
    }
  }

  render() {
    return (
      <>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3} style={{marginTop:-50}} >
        <Heading size={1000} style={{marginLeft: 250}}>AppCues</Heading>
      </Pane>
      <div style={{ marginTop: '5vh', textAlign: 'center' }}>
      </div>
      </>
    )
  }
}
