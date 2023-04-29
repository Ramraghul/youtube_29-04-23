const express = require('express')
const router = express.Router();

const { adminLogin,createUsers} = require('../controllers/admin')

router.route('/login').post(adminLogin);
router.route('/newuser').post(createUsers);

module.exports = router