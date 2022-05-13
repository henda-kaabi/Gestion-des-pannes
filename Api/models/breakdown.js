const mongoose = require ('mongoose')

const breakdownSchema = mongoose.Schema ({

    projet: {
        type: String,
        required: true,
     
    },

    ligne: {
        type: String,
        required: true,
    
    }, 

    poste: {
        type: String,
        required: true,
    
    },   
    
    categorie: {
        type: String,
        required: true,
      
    },
     
    shift: {
        type: String,
        required: true,
       
    },
    
    description: {
        type: String,
        required: true,
     
    },

    date: {
        type: Number,
        required: true,
    
    }, 

    time: {
        type: Number,
        required: true,
    
    },   
    

});



module.exports = Breakdown = mongoose.model('breakdown',breakdownSchema)