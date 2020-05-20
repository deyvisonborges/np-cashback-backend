'use strict'

const _serverApplication = require('./src/app');
const _logApplication = require('./src/log/process');

_serverApplication.listen(
    _serverApplication.get('APPLICATION_PORT'),
    () => _logApplication.log(_serverApplication.get('APPLICATION_PORT')));
