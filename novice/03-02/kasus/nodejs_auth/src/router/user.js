const express = require('express');
const router = new express.Router()
const User = require('../models/user')
const { ObjectID } = require('mongodb')

module.exports = router

router.post('/users', async(req, res) => {
    const user = new User(req.body);
    try {
        const token = await user.newAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.checkValidCredentials(req.body.email, req.body.password)
        const token = await user.newAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send()
    }
})