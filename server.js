const app = require('app')

require('http').createServer(app).listen(8000, () => {
  console.log('서버시작')
  console.log('http://127.0.0.1:8000')
})