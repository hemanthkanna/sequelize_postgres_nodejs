const express = require('express');
const { createUser, deleteUser, getUsers } = require('../controllers/users.controller');
const router = express.Router();

router.route('/').post(createUser);
router.route('/').get(getUsers);
router.route('/:id').delete(deleteUser);

module.exports = router;