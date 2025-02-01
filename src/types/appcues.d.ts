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
  getField: (campaignId: string, fieldName: string, fallback: string) => string
  logImpression: (campaignId: string, variantId: string) => void
}
