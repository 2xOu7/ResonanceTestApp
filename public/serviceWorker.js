self.addEventListener('install', (event) => {
  self.skipWaiting() // Activate worker immediately
})

self.addEventListener('activate', (event) => {
  self.clients.claim() // Take control of all pages immediately
})

self.onfetch = async (event) => {
  event.respondWith(
    (async () => {
      const reqClone = event.request.clone()
      const response = await fetch(event.request)
      try {
        const body = await reqClone.json()
        const resClone = response.clone()
        const resJson = await resClone.json()

        console.log({
          request: { url: reqClone.url, body },
          response: { body: resJson, url: resClone.url },
        })

        return response
      } catch (e) {
      } finally {
        return response
      }
    })()
  )
}

sleep = async (ms) => {
  console.log('Sleeping')
  return new Promise((resolve) => setTimeout(resolve, ms))
}
