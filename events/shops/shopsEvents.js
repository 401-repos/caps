'use strict';

const events = require('../events');
const shopHandler = require('./shopsHandlers');

events.on('neworder', shopHandler.newOrderHandler);
events.on('thank', shopHandler.deleveredHandler);
