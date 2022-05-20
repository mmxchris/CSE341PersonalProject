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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => [
     console.log(`Surver running on port ${port}`)
 ]);