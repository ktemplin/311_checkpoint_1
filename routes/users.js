const router = require('express').Router()
const UsersController = require('../controllers/users.js')

// GET /users
router.get('/users', UsersController.list);
// Return all users

// GET /users/:id
router.get('/users/:id', UsersController.show);
// Return just the user that matches the path param (id)

// POST /users
router.post('/users', UsersController.create)
// Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (data/index). The next user should be 11

// PUT /users/:id
router.put('/users/:id', UsersController.update)
// Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

// DELETE /users/:id
router.delete('/users/:id', UsersController.remove)
// Delete one user by its id


module.exports = router