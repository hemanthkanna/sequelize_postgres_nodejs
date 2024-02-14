const express = require('express');
const { createUser, deleteUser, getUsers, getSingleUser } = require('../controllers/users.controller');
const router = express.Router();

router.route('/').post(createUser);
router.route('/').get(getUsers);
router.route('/:id').get(getSingleUser);
router.route('/:id').delete(deleteUser);

module.exports = router;