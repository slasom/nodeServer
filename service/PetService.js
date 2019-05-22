'use strict';


/**
 * Add a new pet to the store
 *
 * pet Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
module.exports.addPet = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for addPet'
    });
};


/**
 * Deletes a pet
 *
 * petId Long Pet id to delete
 * apiUnderscorekey String  (optional)
 * no response value expected for this operation
 **/
module.exports.deletePet = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for deletePet'
    });
};


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * statusList List Status values that need to be considered for filter
 * returns List
 **/
module.exports.findPetsByStatus = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for findPetsByStatus'
    });
};


/**
 * Finds Pets by tags
 * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *
 * tagsList List Tags to filter by
 * returns List
 **/
module.exports.findPetsByTags = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for findPetsByTags'
    });
};


/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 **/
module.exports.getPetById = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for getPetById'
    });
};


/**
 * Update an existing pet
 *
 * pet Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
module.exports.updatePet = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for updatePet'
    });
};


/**
 * Updates a pet in the store with form data
 *
 * petId Long ID of pet that needs to be updated
 * name String Updated name of the pet (optional)
 * status String Updated status of the pet (optional)
 * no response value expected for this operation
 **/
module.exports.updatePetWithForm = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for updatePetWithForm'
    });
};


/**
 * uploads an image
 *
 * petId Long ID of pet to update
 * body File  (optional)
 * returns ApiResponse
 **/
module.exports.uploadFile = function(req, res, next) {
    res.send({
        message: 'This is the mockup controller for uploadFile'
    });
};

