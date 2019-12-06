const Model = require('utils/Model')

module.exports = new Model('comment', {
  user: null,
  content: '제목없음',
  likes: 0,
})