const express = require('express');
const router = express.Router();
const localtoken = require('localtoken');

router.get('/', (req, res) => {
  localtoken.setInLocal('token', 'ijoijoij');
  console.log(localtoken.getInLocal('token'));
  res.send('cookie disponivel');
});

router.post('/', (req, res) => {
})

module.exports = router;
