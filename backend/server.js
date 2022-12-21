
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan')

const peopleController = require('./controllers/people-controller.js')

require("dotenv").config();
require('./config/db.connection.js')

const {PORT} = process.env;

app.use(express.json());

app.use(cors())

app.use(morgan('dev'))

app.use('/people', peopleController)


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
