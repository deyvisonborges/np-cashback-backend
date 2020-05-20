'use strict';


require('dotenv/config');


const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const morgan = require('morgan');


const _application = express();


const _maintenanceMode = require('./middlewares/maintenance');


_application.set('APPLICATION_PORT', process.env.APPLICATION_PORT);
_application.set('MAINTENANCE_MODE_FLAG', false);


_application.use(body_parser.json({ limit: '15mb' }));
_application.use(body_parser.urlencoded({ extended: false }));
_application.use(body_parser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));


_application.use(cors());
_application.use(morgan('dev'));


_application.use(_maintenanceMode(_application.get('MAINTENANCE_MODE_FLAG')));


module.exports = _application;
