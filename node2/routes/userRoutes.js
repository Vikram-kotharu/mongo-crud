const express = require('express');

const Router = express.Router();
const {getAllfood,CreateFood,getFood,delFood,updateFood,getAllfoodavailable} = require('../controller/foodController')
Router.get('/',getAllfood);

Router.get('/:id',getFood)

Router.post('/',CreateFood)

Router.delete('/:id',delFood)

Router.patch('/:id',updateFood)

Router.get('/available',getAllfoodavailable)

module.exports = Router