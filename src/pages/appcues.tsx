import React, { Component } from 'react';
import { Heading, Pane } from 'evergreen-ui';
import axios from 'axios';

export default class Appcues extends Component {
  componentDidMount() {
    if (window.Appcues) {
      axios.post(
        'https://app.staging.useresonance.com/api/appcues/getbestmessages',
        {},
        {
          headers: {
            Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
          },
        }
      ).then(({ data }) => {
        const castedData = data as {
          [key: string]: {
            content: { [key: string]: string }
            variantId: string
          }
        }
        window.Appcues.identify('test_user_id', {
          name: 'Katherine Pioro',
          email: 'katherine@useresonance.com',
          test: castedData
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
