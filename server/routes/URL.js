const express = require('express')
const router = express.Router();


const { createURL,getURLbasedOnUser,getURLbasedOnId} = require('../controllers/URL')
router.route('/new').post(createURL);
router.route('/data/:id').get(getURLbasedOnUser);
router.route('/video/:id').get(getURLbasedOnId);

module.exports = router