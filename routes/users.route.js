const express = require('express');
const { createUser, deleteUser } = require('../controllers/users.controller');
const router = express.Router();

router.route('/').post(createUser);
router.route('/:id').delete(deleteUser);

module.exports = router;