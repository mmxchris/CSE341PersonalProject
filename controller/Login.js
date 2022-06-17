const User = require('../DB/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidation} = require('../helper/userValidation');

const logInUser = async (req, res) => {
    /*
      #swagger.tags = ['User']
      #swagger.description = 'Used to login as a user"
      #swagger.parameters['User'] = { 
         description: 'Data that is needed to login a user',
            in: 'body', 
            '@schema': { 
                "required": ["User"], 
                "properties": { 
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
     const {error} = loginValidation(req.body);
     if(error) return res.status(400).send(error.details[0].message);
     /* #swagger.responses[400] = {
            description: '400 Bad Request'
        } */

     //check if user is in database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email or Password incorrect or not found.');

    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Email or Password incorrect or not found.')

    //create and sign token
    const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
    res.status(200).header('auth-token', token).send(token);
     /* #swagger.responses[200] = {
            description: '200 User login succeeded'
        } */

};

module.exports = {logInUser};