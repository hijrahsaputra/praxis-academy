const express = require('express');
const router = new express.Router()
const Post = require('../models/post')
const { ObjectID } = require('mongodb')

module.exports = router