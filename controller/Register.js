const mongoose = require('mongoose');
const User = require('../DB/User');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../helper/userValidation');

const registerUser = async (req, res) => {
    /*
    #swagger.tags = ['User']
    #swagger.description = 'Used to register a user"
    #swagger.parameters['User'] = { 
         description: 'Data that represents a user',
            in: 'body', 
            '@schema': { 
                "required": ["User"], 
                "properties": { 
                    "name": { 
                        "type": "string", 
                        "minLength": 6, 
                        "maxLength": 255, 
                        "example": "Joe Doe" 
                    },
                    "email": {
                        "type": "string", 
                        "minLength": 6, 
                        "maxLength": 255, 
                        "example": "Joe@Doe.com"
                    },
                     "password": {
                        "type": "string",
                        "required": "true",
                        "minLength": 6,
                        "maxLength": 1024,
                        "example": "1234Abcd"
                    }
                } 
            } 
        }
    */
    //validate data before user is created 
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
        /* #swagger.responses[400] = {
            description: '400 Bad Request'
        } */

    //check if user is in database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
try{    
    const savedUser = await user.save();
   res.send({user: user._id});
        /* #swagger.responses[200] = {
            description: '200 User Created'
        } */   

}catch(err){
    res.status(500).send(err);
     /* #swagger.responses[500] = {
            description: '500 Internal Server Error'
        } */
}
};

module.exports = {registerUser};