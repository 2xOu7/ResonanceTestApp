import React, { Component } from 'react';
import { Heading, Pane } from 'evergreen-ui';
import axios from 'axios';

export default class Appcues extends Component {
  componentDidMount() {
    if (window.Appcues) {
      axios.post(
        'http://localhost:3000/api/appcues/getbestmessages',
        {},
        {
          headers: {
            Authorization: `Bearer 8928257a2acdda374fb314d0a845f73a3b3d9118a77c6c0f17d5bae97e29283e54a0e7fc097665de42fc7efb1ef483ad`,
          },
        }
      ).then(({ data }) => {
        window.Appcues.identify('test_user_id', {
          name: 'Katherine Pioro',
          email: 'katherine@useresonance.com',
          test: data
        });

        window.Appcues.show("05888a59-8aec-4b55-9222-0b97156851a7");
      }).catch(error => console.error("Error fetching Appcues data:", error));
    }
  }

  render() {
    return (
      <>
        <Pane display="flex" padding={16} background="tint2" borderRadius={3} style={{ marginTop: -50 }}>
          <Heading size={1000} style={{ marginLeft: 250 }}>AppCues</Heading>
        </Pane>
        <div style={{ marginTop: '5vh', textAlign: 'center' }}></div>
      </>
    );
  }
}
