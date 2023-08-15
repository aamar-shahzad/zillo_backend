const express = require('express');


const router = express.Router();
const model=require("../model")
router.post("/",async(req,res)=>{
  const newDate= new model({
    experience:34
  })
const data= await newDate.save()
  res.json(data)
})
router.get('/', async(req, res) => {
  const data=await model.find()
  console.log("data",data)
  res.json(['😀']);
});

module.exports = router;
