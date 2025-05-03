self.onfetch = (event) => {
  event.respondWith(
    (async () => {
      console.log(event)
      const response = await fetch(event.request)
      console.log(response)
      return response
    })()
  )
}
