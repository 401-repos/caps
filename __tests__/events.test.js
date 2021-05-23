'use strict';
require('../events/drivers/driverEvents');
require('../events/shops/shopsEvents');
const driverHandlers = require('../events/drivers/driverHandlers');
const shopsHandlers = require('../events/shops/shopsHandlers');
const events = require('../events/events');



describe('Events', () => {
    let spyCons;
    beforeEach(() => {
        spyCons = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        spyCons.mockRestore();
    });
   it('should fire the event handler', () => {
       events.emit('intransit', {payload:{orderId:0}});
       expect(spyCons).toHaveBeenCalled();
   }); 
   it('should fire the event handler', () => {
       events.emit('delivered', {
           payload: {
               orderId: 0
           }
       });
       expect(spyCons).toHaveBeenCalled();
   }); 
   it('should fire the event handler', () => {
       events.emit('thank', {
           payload: {
               orderId: 0
           }
       });
       expect(spyCons).toHaveBeenCalled();
   }); 
   it('should fire the event handler', () => {
       events.emit('neworder', {
           payload: {
               orderId: 0
           }
       });
       expect(spyCons).toHaveBeenCalled();
   }); 
   it('should fire the event handler', () => {
       events.emit('pickup', {
           order: {
               orderId: 0
           }
       });
       expect(spyCons).toHaveBeenCalled();
   }); 
});