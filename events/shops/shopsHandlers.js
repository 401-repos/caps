'use strict'

const events = require('../events');
const faker = require('faker');
const {
    fake
} = require('faker');
const SHOPNAME = process.env.SHOPNAME;
function newOrderHandler() {
    let order = new Order();
    console.log('A new order is ready to pick up');
    setTimeout(() => {
        events.emit('pickup', {
            event: "Pick Up",
            time: new Date().toString(),
            order: order
        })
    }, 3000)
}

function deleveredHandler(payload) {
    console.log(payload);
    console.log("===================================");
    console.log("++++++++++++++++++++++++++++++++++++");
    console.log('Thank you for delivering our items')
    console.log("++++++++++++++++++++++++++++++++++++");
    console.log("===================================");
}
class Order {
    constructor() {
        this.storeName = SHOPNAME;
        this.orderId = faker.datatype.uuid();
        this.customerName = faker.name.findName();
        this.address = faker.address.streetAddress();
    }
}

module.exports = {
    newOrderHandler,
    deleveredHandler
}