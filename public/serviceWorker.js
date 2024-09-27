let key = ''

self.onmessage = (event) => {
  key = event.data
}

self.onnotificationclick = async (event) => {
  if (event.action && event.action.length > 0) {
    await self.clients.openWindow(event.action)
  }
}

self.onpush = async (event) => {
  try {
    const parsedData = event.data.json()
    console.log(parsedData)

    await self.registration.showNotification(parsedData.title, {
      body: parsedData.body,
      icon: parsedData.icon,
      actions: [
        {
          action: parsedData.firstActionUrl,
          title: parsedData.firstActionTitle,
        },
        {
          action: parsedData.secondActionUrl,
          title: parsedData.secondActionTitle,
        },
      ],
    })
  } catch (e) {
    console.error(e)
  }
}
