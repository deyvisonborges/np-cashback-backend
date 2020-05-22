const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('passei por aqui')
  res.send('ola');
});

module.exports = router;
