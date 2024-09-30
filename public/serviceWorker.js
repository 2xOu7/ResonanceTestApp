let tabId = ''

self.onmessage = (event) => {
  tabId = event.data
}

self.onnotificationclick = async (event) => {
  if (event.action && event.action.length > 0) {
    await self.clients.openWindow(event.action)
  }
}

self.onpush = async (event) => {
  try {
    const parsedData = event.data.json()
    const { content } = parsedData
    await self.registration.showNotification(content.title, {
      body: content.body,
      icon: content.icon,
      actions: [
        {
          action: content.firstActionUrl,
          title: content.firstActionTitle,
        },
        {
          action: content.secondActionUrl,
          title: content.secondActionTitle,
        },
      ],
    })
  } catch (e) {
    console.error(e)
  }
}
