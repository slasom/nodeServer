'use strict';


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * user User Created user object
 * no response value expected for this operation
 **/
module.exports.createUser = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for createUser'
    });
};


/**
 * Creates list of users with given input array
 *
 * userList List List of user object
 * no response value expected for this operation
 **/
module.exports.createUsersWithArrayInput = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for createUsersWithArrayInput'
    });
};


/**
 * Creates list of users with given input array
 *
 * userList List List of user object
 * no response value expected for this operation
 **/
module.exports.createUsersWithListInput = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for createUsersWithListInput'
    });
};


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
module.exports.deleteUser = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for deleteUser'
    });
};


/**
 * Get user by user name
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
module.exports.getUserByName = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for getUserByName'
    });
};


/**
 * Logs user into the system
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
module.exports.loginUser = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for loginUser'
    });
};


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
module.exports.logoutUser = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for logoutUser'
    });
};


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be updated
 * user User Updated user object
 * no response value expected for this operation
 **/
module.exports.updateUser = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for updateUser'
    });
};

