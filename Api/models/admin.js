const mongoose = require ('mongoose')

const adminSchema = mongoose.Schema ({
  
    
    email: {
        type: String,
        required: true,
      
    },
     
    password: {
        type: String,
        required: true,
       
    },

});

module.exports = Admin = mongoose.model('admin',adminSchema)



