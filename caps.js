'use strict';
require('dotenv').config();
const events = require('./events/events');

require('./events/shops/shopsEvents');
require('./events/drivers/driverEvents');

setInterval(() => {
    await events.emit('neworder', {event:'New Order'});
}, 5000);