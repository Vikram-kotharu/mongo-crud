const { response } = require('express');
const foodModel = require('../models/foodModel')
const Food = require('../models/foodModel')

const getAllfood = async(req,res) =>{
    const foods = await Food.find({availability:"false"}).sort({quantity:-1});
    res.json(foods);


}
const CreateFood =async (req,res) =>{
    const {name,price,quantity,description,availability} = req.body
    const food = await Food.create({name,price,quantity,description,availability})
    res.json(food)
        
    
}
const getFood = async(req,res) =>{
    const {id} = req.params
    const food = await Food.findById(id)
    if(!food){
        res.json({
            msg:"NOT FOUND 404"
        })
        
    }
    else{
        res.json(food)
    }

}
const delFood = async(req,res) =>{
    const {id} = req.params
    const food = await Food.findByIdAndDelete(id)
    res.send('DELETED!')


}
const updateFood = async(req,res)=>{
    const {id} = req.params
    const food = await Food.findByIdAndUpdate(id,{
        ...req.body
    })

    if(food){
        res.json(food)
    }


}
const getAllfoodavailable = async(req,res) =>{
    const foods = await Food.find()
    res.json(foods);


}

module.exports = {getAllfood,CreateFood,getFood,delFood,updateFood,getAllfoodavailable}