const express = require('express')
const Router = express.Router()
const LFapi = require('../Controller/LFapi')
const togetLFapi = require('../Controller/togetLF')


Router.post('/LostFound',LFapi.LFapi);
Router.get('/togetLF',togetLFapi.togetLFapi);









module.exports = Router;
