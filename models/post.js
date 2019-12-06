const Model = require('utils/Model')

module.exports = new Model('post', {
  user: null,
  title: '제목없음',
  content: '내용이 없습니다.',
  likes: 0,
})