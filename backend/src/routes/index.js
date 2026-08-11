const express = require('express');
const config = require('../config');
const R = require('../utils/response.util');
const { authenticate, requireApp } = require('../middleware/auth.middleware');

const router = express.Router();

router.use('/auth', require('./auth.routes'));

// Example protected route. Replace/delete when the first real domain module exists.
router.get(
  '/protected',
  authenticate,
  requireApp(config.app.slug),
  (req, res) => R.ok(res, { user_id: req.user.id }, 'Protected route OK')
);

module.exports = router;
