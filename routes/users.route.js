const express = require('express');
const { createUser, deleteUser, getUsers, getSingleUser, updateUser } = require('../controllers/users.controller');
const router = express.Router();

router.route('/').post(createUser);
router.route('/').get(getUsers);
router.route('/:id').get(getSingleUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;