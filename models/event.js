const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        category: 'Physical Events',
        title: 'Welcome Event',
        hostName: 'Ghana Students Association at UNCC',
        startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        details: 'This is a welcome event to welcome Ghanaians to the Spring 2024 Semester.',
        location: 'CHCC 241',
        image: './img/event_flyer.jpg'
  },
  {
        id: '2',
        category: 'Physical Events',
        title: 'Black History Month',
        hostName: 'Ghana Students Association at UNCC',
        startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        details: 'February is Black Hievent Month. This event will commerate the blacks that made a difference in a world',
        location: 'CHCC 241',
        image: './img/event_flyer.jpg'
  },
  {
        id: '3',
        category: 'Physical Events',
        title: 'Independence Day Celebration',
        hostName: 'Ghana Students Association at UNCC',
        startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        details: 'Ghana Celebrates its independence day on the 6th of March.',
        location: 'CHCC 241',
        image: './img/event_flyer.jpg'
  },
  {
        id: '4',
        category: 'Online Events',
        title: 'Credit Card Seminar',
        hostName: 'Ghana Students Association at UNCC',
        startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        details: 'Helping Ghanaian Students is US with building their credit',
        location: 'Zoom',
        image: './img/event_flyer.jpg'
  },
  {
        id: '5',
        category: 'Online Events',
        title: 'Mortgage Seminar',
        hostName: 'Ghana Students Association at UNCC',
        startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        details: 'February is Black History Month. This event will commerate the blacks that made a difference in a world',
        location: 'Zoom',
        image: './img/event_flyer.jpg'
  },
  {
        id: '6',
        category: 'Online Events',
        title: 'NIW Seminar',
        hostName: 'Ghana Students Association at UNCC',
        startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        details: 'February is Black History Month. This event will commerate the blacks that made a difference in a world',
        location: 'Zoom',
        image: './img/event_flyer.jpg'
  }
 ] ;


// Find Show all events
exports.find = () => events;

//Find event by id
exports.findById = id => events.find(event=> event.id === id);

//Create new event function
exports.save = function(event) {
    event.id = uuidv4();
    event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    events.push(event);
}

//Update event function
exports.updateById = function(id, newEvent) {
    let event = events.find(event=> event.id === id);
    if(event) {
        event.title =newEvent.title;
        event.content = newEvent.content;
        return true;
     } else {
        return false;
     }
  }

  exports.deleteById = function(id) {
    let index = events.findIndex(event=> event.id === id);
    if(index !== -1) {
        events.splice(index, 1);
        return true;
     } else {
        return false;
     }
  }