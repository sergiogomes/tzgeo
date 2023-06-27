const { find } = require('geo-tz')

console.log(find(47.650499, -122.350070))  // ['America/Los_Angeles']
console.log(find(43.839319, 87.526148))  // ['Asia/Shanghai', 'Asia/Urumqi']
