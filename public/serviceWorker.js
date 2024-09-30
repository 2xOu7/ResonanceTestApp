let key = ''

self.onmessage = (event) => {
  key = event.data
}

self.onnotificationclick = async (event) => {
  if (event.action && event.action.length > 0) {
    const {
      url,
      campaignId,
      variantId,
      variantName,
      requestType,
      userAttributes,
      externalUserId,
    } = JSON.parse(event.action)

    await self.clients.openWindow(url)

    if (requestType === 'impression') {
      await fetch('https://app.useresonance.com/api/events/emit', {
        method: 'POST',
        headers: {
          Authorization: `${key}`,
          "Content-Type": "application/json",
        },
        body: {
          campaignId,
          variantId,
          variantName,
          externalUserId,
          eventType: 'confirmation',
          campaignType: 'push',
          userAttributes,
        },
      })
    }
  }
}

self.onpush = async (event) => {
  try {
    const parsedData = event.data.json()
    const {
      content,
      campaignId,
      variantId,
      variantName,
      requestType,
      userAttributes,
      externalUserId,
    } = parsedData
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
            externalUserId,
            userAttributes,
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
            userAttributes,
            externalUserId,
          }),
          title: content.secondActionTitle,
        },
      ],
    })

    if (requestType === 'impression') {
      await fetch('https://app.useresonance.com/api/events/emit', {
        method: 'POST',
        headers: {
          Authorization: `${key}`,
          "Content-Type": "application/json",
        },
        body: {
          campaignId,
          variantId,
          variantName,
          externalUserId,
          eventType: 'impression',
          campaignType: 'push',
          userAttributes,
        },
      })
    }
  } catch (e) {
    console.error(e)
  }
}
