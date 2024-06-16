import { Button } from '@mui/material'
import { notifyEvent } from 'resonance-client'
import React from 'react'

export default function Home() {
  const chameleon = require('@chamaeleonidae/chmln')
  chameleon.init(
    'S84xJ6DS6NJV1NT6wpgtCJ58XwnSXcoZC9e2IjTaKqCWDl-1ShZoy-FdUvTuEU0fJ4Dtyj',
    { fastUrl: 'https://fast.chameleon.io/' }
  )

  chameleon.identify('123')

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
          notifyEvent('red_button_clicked')
        }}
      >
        Red Button
      </Button>
    </div>
  )
}
