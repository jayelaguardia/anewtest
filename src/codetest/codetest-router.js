const express = require('express');
const CodeService = require('./codetest-service');
const CodeRouter = express.Router();
const jsonBodyParser = express.json();

CodeRouter
  .route('/test')
  .get(jsonBodyParser, async (req, res, next) => {
    const userOne = CodeService.getUserWithID(req.app.get('db'), 1)
    res.status(200).json(userOne)
  })

module.exports = CodeRouter;