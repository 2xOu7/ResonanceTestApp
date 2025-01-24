import Image from 'next/image'
import ResonanceLogo from '../../resonance_logo.png'
import { Component } from 'react'

export default class ResonanceSVGIcon extends Component {
  render() {
    return <Image src={ResonanceLogo} alt="Resonance Logo" width={24} height={24} />
  }
}
