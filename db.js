const fs = require('fs');

const database = {
    tasks: [
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Meeting at School",
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: 3,
            text: "Food Shopping!",
            day: "Feb 8th at 4:00pm",
            reminder: false
        }
    ]
}

fs.writeFile('db.json',JSON.stringify(database),(err) => {
    if (err) throw err;
    console.log('Data written to file');
});
