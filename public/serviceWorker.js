let tabId = ''

self.onmessage = (event) => {
  tabId = event.data
}

self.onnotificationclick = async (event) => {
  if (event.action && event.action.length > 0) {
    const { url, campaignId, variantId, variantName, requestType } = JSON.parse(
      event.action
    )

    await self.clients.openWindow(url)

    if (requestType === 'impression') {
      const bc = new BroadcastChannel(`${tabId}`)

      bc.postMessage({
        campaignId,
        variantId,
        variantName,
        eventType: 'confirmation',
      })

      bc.close()
    }
  }
}

self.onpush = async (event) => {
  try {
    const parsedData = event.data.json()
    const { content, campaignId, variantId, variantName, requestType } =
      parsedData
    await self.registration.showNotification(content.title, {
      body: content.body,
      icon: content.icon,
      actions: [
        {
          action: JSON.stringify({
            url: content.firstActionUrl,
            campaignId,
            variantId,
            variantName,
            requestType,
          }),
          title: content.firstActionTitle,
        },
        {
          action: JSON.stringify({
            url: content.secondActionUrl,
            campaignId,
            variantId,
            variantName,
            requestType,
          }),
          title: content.secondActionTitle,
        },
      ],
    })

    if (requestType === 'impression') {
      const bc = new BroadcastChannel(`${tabId}`)

      bc.postMessage({
        campaignId,
        variantId,
        variantName,
        eventType: 'impression',
      })

      bc.close()
    }
  } catch (e) {
    console.error(e)
  }
}
