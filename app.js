//Require modules

const express = require('express');
const morgan = require('morgan');
const mainRoutes = require('./routes/mainRoutes');
const eventRoutes = require('./routes/eventRoute');
const methodOverride = require('method-override');

//create app
const app = express();


//Configure application
let port = 5000;
let host = 'localhost';
app.set('view engine', 'ejs');


// Mount Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended :true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

// Setup Routes route modules
app.use('/', mainRoutes);
app.use('/events', eventRoutes);

//Cannot find a resource Error Page

app.use((req, res, next)=>{
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status);
    res.render('error', {err: err});
});


//start the server
app.listen(port, host, () => {
    console.log('The server is running on port', port);
});

