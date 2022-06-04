const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session')
const connectionDB = require('./DB/connection');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
connectionDB();

app.use(bodyParser.json());
app.use('/', require('./routes'));

//session
app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false
}))

//passport
require('./helper/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/auth', require('./routes/auth'));

app.listen(port, () => [
     console.log(`Surver running on port ${port}`)
 ]);