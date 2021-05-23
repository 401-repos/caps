'use strict';

const events = require('../events');

function pickupHandler(payload) {
    console.log(payload)
    console.log('Order: ' + payload.order.orderId + ' has been picked up !! ');
    setTimeout(() => {
        events.emit('intransit', {
            event: "In Transit",
            time: new Date().toString(),
            payload: payload.order,
        })
    }, 2000)
}

function intransitHandler(payload) {
    console.log(payload);
    console.log('Order '+ payload.payload.orderId+' is in transit');
    setTimeout(() => {
        events.emit('delivered', {
            event: "Item Delivered",
            time: new Date().toString(),
            payload: payload.payload,
        });
    }, 5000)
}

function deleveredhandler(payload) {
    console.log(payload);
    console.log("Order"+payload.payload.orderId+" has been delivered");
    setTimeout(() => {
        events.emit('thank', {
            event: "Thank you",
            time: new Date().toString(),
            payload: payload.payload,
        })
    }, 1000);
}

module.exports = {
    deleveredhandler,
    pickupHandler,
    intransitHandler
}