const express = require('express');
const router = express.Router();
const responses = require('../modules/responses');

router.post('/', function(req, res) {
  console.log(req.body);
  console.log(responses);
  responses.getResponse(req.body.message, function(response) {
    res.json({response: response});
  });
});

module.exports = router;
