const { find } = require('geo-tz')

const { locationList } = require('./locations')

const success = []
const errors = []

locationList.forEach(location => {
  try {
    const result = find(location.geo[0], location.geo[1])
    success.push({
      id: location.id,
      tz: result[0]
    })
  } catch (error) {
    console.error(location.id, error)
    errors.push({
      id: location.id,
      error: error.message
    })
  }
})

console.log('** Success **', success)
console.log('** Error **', errors)

// console.log(find(47.650499, -122.350070))  // ['America/Los_Angeles']
// console.log(find(43.839319, 87.526148))  // ['Asia/Shanghai', 'Asia/Urumqi']
