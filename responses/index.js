const success = res => ({
  message = 'success',
  data = {},
}) => res.json({
  status: true,
  message,
  data,
})

const handledError = res => ({
  status = 400,
  data = {},
  message = 'Bad Request',
}) => res.status(status).json({
  hasHandled: true,
  status: false,
  message,
  data,
})

module.exports = {
  success,
  handledError,
}