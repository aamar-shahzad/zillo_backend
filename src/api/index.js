const express = require('express');
const route = require('./routes');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});
router.use('/data', route);



module.exports = router;
