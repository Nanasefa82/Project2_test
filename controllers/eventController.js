const model = require('../models/event');

exports.index= (req, res) => {
    // res.send('Send all events');
    let events = model.find();
    res.render('./event/index', {events});

};

exports.new =  (req, res) =>{
    res.render('./event/new');
};

exports.create = (req, res) => {
    let event = req.body;
    model.save(event);
    res.redirect('/events');

};
// Show a particular event

exports.show = (req, res, next) => {
    let id = req.params.id;
    console.log("Requested event ID:", id); // Log the ID parameter
    let event = model.findById(id); 

    if (event) {
        res.render('./event/show', {event});
    } 
    else {
        let err = new Error('Cannot find an event with this id ' + id);
        next(err);
    }
};

// Eidt an event by first finding the form and making the changes
exports.edit = (req, res, next)=> {
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        res.render('./event/edit',{event});
    }
    else {
        let err = new Error('Cannot find a event with this id ' + id);
        err.status = 404;
        next(err);
    }
    // res.send('Send the edit form');
};

// Function to update a event
exports.update = (req, res,next)=> {
    let event = req.body;
    let id = req.params.id;
    // console.log(event);
    if (model.updateById(id, event)) {
        res.redirect('/event/'+id);
        } else {
        let err = new Error('Cannot find a event with this id ' + id);
        err.status = 404;
        next(err);
    }
};
//Function to delete a event
exports.delete = (req, res, next)=> {
    let id = req.params.id;
    if(model.deleteById(id)) {
        res.redirect('/events');
    }
    let err = new Error('Cannot find a event with this id ' + id);
    err.status = 404;
    next(err);
};


