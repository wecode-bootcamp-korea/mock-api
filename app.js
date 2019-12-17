const express = require('express')
const app = express()

const response = require('./responses')

const routes = require('routes')

app.use(express.json())

app.use(routes)

app.use((req, res) => {
  response.handledError(res)({
    message: 'Unknown API Endpoint',
    status: 400,
    data: {
      method: req.method,
      url: req.originalUrl,
    },
  })
})

app.use((err, req, res, next) => {
  console.log(err)
  if (err.hasHandled) return response.handledError(res)(err)
  res.status(500).json({
    status: false,
    message: '에러가 발생했습니다.',
    data: err
  })
}) 

module.exports = app