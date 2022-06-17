const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 Personal Project',
    description: 'An API for tracking survey orders for meat deparment and produce department.',
    contact:{
        name: "Christopher Bowen"
    },
  host: 'localhost:3000',
  schemes: ['http'],  
  },
  securityDefinitions: {  
  JWT:{  
    type: 'apiKey',  
    in: 'header',  
    name: 'auth-token'
  }
}

};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js');
});