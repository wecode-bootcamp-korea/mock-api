const post = require('models/post')
const validator = require('express-validator')
const responses = require('../responses')

const validationError = (req, res, next) => {
  const errors = validator.validationResult(req);
  if (errors.isEmpty()) return next()
  responses.handledError(res)({
    status: 422,
    message: 'Wrong Request Format',
    data: errors.array(),
  })
}

const checkID = [
  validator.param('id').toInt().isInt(),
  validationError,
]

const checkList = [
  validator.query('page').optional().toInt().isInt(),
  validator.query('length').optional().toInt(),
  validator.query('reverse').optional().toBoolean(),
  validationError,
]

const createPost = async (req, res, next) => {
  try {
    const data = await post.create(req.body)
    responses.success(res)({
      message: 'Entity Has Created',
      data,
    })
  } catch (err) {
    next(err)
  }
}

const updatePost = async (req, res, next) => {
  try {
    const data = await post.update(req.params.id, req.body)
    responses.success(res)({
      message: 'Entity Has Updated',
      data,
    })
  } catch (err) {
    next(err)
  }
}

const deletePost = async (req, res, next) => {
  try {
    const data = await post.remove(req.params.id)
    responses.success(res)({
      message: 'Entity Has Deleted',
      data,
    })
  } catch (err) {
    next(err)
  }
}

const listPost = async (req, res, next) => {
  try {
    const {
      page,
      length,
      reverse,
    } = req.query

    const data = await post.findList({
      page,
      length,
      reverse,
    })

    responses.success(res)({
      data,
    })
    
  } catch (err) {
    next(err)
  }
}

const OnePost = async (req, res, next) => {
  try {
    const data = await post.findOne(req.params.id)
    responses.success(res)({
      data,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create: createPost,
  update: updatePost,
  remove: deletePost,
  getList: listPost,
  getOne: OnePost,
  
  checkID,
  checkList,
}