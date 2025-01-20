interface Window {
  Appcues?: any
  AppcuesSettings?: {
    enableURLDetection: boolean
  }
  performAction: () => Promise<string>
}
