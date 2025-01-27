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
  logImpression: (string) => void
}
