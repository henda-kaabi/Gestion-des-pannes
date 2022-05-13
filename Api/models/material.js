const mongoose = require ('mongoose')

const materialSchema = mongoose.Schema ({

    projet: {
        type: String,
        required: true,
     
    },

    ligne: {
        type: String,
        required: true,
    
    }, 
