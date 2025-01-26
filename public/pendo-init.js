import axios from 'axios'

;(async function (apiKey) {
  ;(function (p, e, n, d, o) {
    var v, w, x, y, z

    o = p[d] = p[d] || {}
    o._q = o._q || []

    v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']

    for (w = 0, x = v.length; w < x; w++) {
      ;(function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? 'unshift' : 'push'](
              [m].concat([].slice.call(arguments, 0))
            )
          }
      })(v[w])
    }

    y = e.createElement(n)
    y.async = true

    y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js'

    z = e.getElementsByTagName(n)[0]
    z.parentNode.insertBefore(y, z)
  })(window, document, 'script', 'pendo')

  const { data } = await axios.post(
    'https://app.staging.useresonance.com/api/pendo/getbestmessages',
    {
      externalUserId: 'jonathan',
    },
    {
      headers: {
        Authorization: `Bearer a73143d411c6ce081479fbf6136659ad75f5ee6e459476f8a26f2090908fc9d52fe89e8f1b283cb253f687e77aebc5a2`,
      },
    }
  )

  pendo.initialize({
    visitor: {
      id: 'jonathan',
      email: 'email',
      full_name: 'full_name',
      role: 'role',
      creationDate: 'creationDate',
      resonance: data,
    },

    account: {
      id: 'id',
      name: 'name',
      is_paying: 'is_paying',
      monthly_value: 'monthly_val',
      planLevel: 'sub_cost',
    },

    guides: {
      globalScripts: [
        {
          script: async function (step, guide) {
            await fetch('https://jsonplaceholder.typicode.com/todos/1')
          },
          // Only run this on a specific known step id
          test: function (step, guide) {
            return true
          },
        },
      ],
    },
  })

  pendo.identify({
    visitor: {
      id: 'jonathan',
      email: 'email',
      full_name: 'full_name',
      role: 'role',
      creationDate: 'creationDate',
      resonance: data,
    },

    account: {
      id: 'id',
      name: 'name',
      is_paying: 'is_paying',
      monthly_value: 'monthly_val',
      planLevel: 'sub_cost',
    },
  })
})('0f9a117a-2cab-4189-6c09-f94ee7a438ff')
