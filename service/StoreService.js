'use strict';


/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 *
 * orderId Long ID of the order that needs to be deleted
 * no response value expected for this operation
 **/
module.exports.deleteOrder = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for deleteOrder'
    });
};


/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 *
 * returns Map
 **/
module.exports.getInventory = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for getInventory'
    });
};


/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 *
 * orderId Long ID of pet that needs to be fetched
 * returns Order
 **/
module.exports.getOrderById = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for getOrderById'
    });
};


/**
 * Place an order for a pet
 *
 * order Order order placed for purchasing the pet
 * returns Order
 **/
module.exports.placeOrder = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for placeOrder'
    });
};

