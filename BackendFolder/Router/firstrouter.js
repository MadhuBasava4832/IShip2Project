const express = require('express');
const Router = express.Router();
const api = require('../Controller/firstcontroller');


Router.post('/testing',api.Testing1);


module.exports = Router;
