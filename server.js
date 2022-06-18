const express = require('express');
const app = express();
const connectionDB = require('./DB/connection');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
connectionDB();

app.use(bodyParser.json());
app.use('/', require('./routes'));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const swaggerOption = {
    swaggerDefiniation: {
        info: {
            title: 'CSE 341 Personal Project',
            description: 'An API for tracking survey orders for meat deparment and produce department.',
            contact:{
                name: "Christopher Bowen"
            },
            server: ["https://cse341-personalproject-cwbowen.herokuapp.com/"]
        }
    },
    apis: ['.routes/*.js']    
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => [
     console.log(`Surver running on port ${port}`)
 ]);