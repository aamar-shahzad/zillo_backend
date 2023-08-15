const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    experience: {
        type: String
    },
    Description: {
 
        type: String
    },
    website: {
        type: String
    },
    photoUrl: {
    type:String
    }
    ,
    languages:
    {
        type:String
    },
    recommendationCount:{
        
    }
})

module.exports = mongoose.model('brokerData', dataSchema)