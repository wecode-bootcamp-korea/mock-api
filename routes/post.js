const express = require('express')
const router = express.Router()

const post = require('controllers/post')

router.post('/', post.create)
router.put('/:id', post.checkID, post.update)
router.delete('/:id', post.checkID, post.remove)
router.get('/', post.checkList, post.getList)
router.get('/:id', post.checkID, post.getOne)

module.exports = router