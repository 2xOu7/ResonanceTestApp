interface Window {
  Appcues?: any
  AppcuesSettings?: {
    enableURLDetection: boolean
  }
  resonanceCopies: {
    [key: string]: {
      content: any
      variantId: string
    }
  }
  logImpression: (campaignId: string, variantId: string) => void
}
