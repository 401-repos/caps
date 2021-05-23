'use strict';

const events = require('../events');
const driverHandler = require('./driverHandlers');

events.on('pickup', driverHandler.pickupHandler);
events.on('intransit', driverHandler.intransitHandler);
events.on('delivered', driverHandler.deleveredhandler);