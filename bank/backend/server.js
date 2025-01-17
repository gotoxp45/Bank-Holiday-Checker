// app.js

// Import Express
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port number
const port = 3000;

// Define a route
app.get('/bank', (req, res) => {
    res.send({
        "Andhra-Pradesh": [
            {
                "name": "Birthday of Swami Vivekananda",
                "date": "2023-01-12"
            },
            {
                "name": "Second Saturday",
                "date": "2023-01-14"
            },
            {
                "name": "Makar Sankranti Festival",
                "date": "2023-01-15"
            },
            {
                "name": "Kanuma Panduga",
                "date": "2023-01-16"
            },
            {
                "name": "Republic Day",
                "date": "2023-01-26"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-01-28"
            },
            {
                "name": "Second Saturday",
                "date": "2023-02-11"
            },
            {
                "name": "Maha Shivratri",
                "date": "2023-02-18"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-02-25"
            },
            {
                "name": "Holi",
                "date": "2023-03-08"
            },
            {
                "name": "Second Saturday",
                "date": "2023-03-11"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-03-25"
            },
            {
                "name": "Ram Navami",
                "date": "2023-03-30"
            },
            {
                "name": "Babu Jagjivan Ram's Birthday",
                "date": "2023-04-05"
            },
            {
                "name": "Good Friday",
                "date": "2023-04-07"
            },
            {
                "name": "Second Saturday",
                "date": "2023-04-08"
            },
            {
                "name": "Dr. Babasaheb Ambedkar Jayanti",
                "date": "2023-04-14"
            },
            {
                "name": "Fourth Saturday/Id-ul-Fitr",
                "date": "2023-04-22"
            },
            {
                "name": "May Day / Labour day",
                "date": "2023-05-01"
            },
            {
                "name": "Second Saturday",
                "date": "2023-05-13"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-05-27"
            },
            {
                "name": "Second Saturday",
                "date": "2023-06-10"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-06-24"
            },
            {
                "name": "Id-ul-Adha",
                "date": "2023-06-29"
            },
            {
                "name": "Second Saturday",
                "date": "2023-07-08"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-07-22"
            },
            {
                "name": "Second Saturday",
                "date": "2023-08-12"
            },
            {
                "name": "Independence Day",
                "date": "2023-08-15"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-08-26"
            },
            {
                "name": "Second Saturday",
                "date": "2023-09-09"
            },
            {
                "name": "Vinayaka Chavithi",
                "date": "2023-09-19"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-09-23"
            },
            {
                "name": "Eid-e-Milad",
                "date": "2023-09-28"
            },
            {
                "name": "Mahatma Gandhi Jayanti",
                "date": "2023-10-02"
            },
            {
                "name": "Second Saturday",
                "date": "2023-10-14"
            },
            {
                "name": "Durgastami",
                "date": "2023-10-22"
            },
            {
                "name": "Vijaya Dasami",
                "date": "2023-10-24"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-10-28"
            },
            {
                "name": "Second Saturday",
                "date": "2023-11-11"
            },
            {
                "name": "Deepavali / Diwali",
                "date": "2023-11-12"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-11-25"
            },
            {
                "name": "Second Saturday",
                "date": "2023-12-09"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-12-23"
            },
            {
                "name": "Christmas",
                "date": "2023-12-25"
            }
         ],
         "Arunachal-Pradesh": [
            {
                "name": "Birthday of Swami Vivekananda",
                "date": "2023-01-12"
            },
            {
                "name": "Second Saturday",
                "date": "2023-01-14"
            },
            {
                "name": "Makar Sankranti Festival",
                "date": "2023-01-15"
            },
            {
                "name": "Republic Day",
                "date": "2023-01-26"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-01-28"
            },
            {
                "name": "Second Saturday",
                "date": "2023-02-11"
            },
            {
                "name": "Statehood Day",
                "date": "2023-02-20"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-02-25"
            },
            {
                "name": "Holi",
                "date": "2023-03-08"
            },
            {
                "name": "Second Saturday",
                "date": "2023-03-11"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-03-25"
            },
            {
                "name": "Shri Ram ",
                "date": "2023-03-30"
            },
            {
                "name": "Annual Closing of Bank Accounts",
                "date": "2023-04-01"
            },
            {
                "name": "Good Friday",
                "date": "2023-04-07"
            },
            {
                "name": "Second Saturday",
                "date": "2023-04-08"
            },
            {
                "name": "Dr. Babasaheb Ambedkar Jayanti",
                "date": "2023-04-14"
            },
            {
                "name": "Bohag Bihu",
                "date": "2023-04-15"
            },
            {
                "name": "Fourth Saturday/Id-ul-Fitr",
                "date": "2023-04-22"
            },
            {
                "name": "Buddha Pournima",
                "date": "2023-05-05"
            },
            {
                "name": "Second Saturday",
                "date": "2023-05-13"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-05-27"
            },
            {
                "name": "Second Saturday",
                "date": "2023-06-10"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-06-24"
            },
            {
                "name": "Second Saturday",
                "date": "2023-07-08"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-07-22"
            },
            {
                "name": "Second Saturday",
                "date": "2023-08-12"
            },
            {
                "name": "Independence Day",
                "date": "2023-08-15"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-08-26"
            },
            {
                "name": "Second Saturday",
                "date": "2023-09-09"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-09-23"
            },
            {
                "name": "Mahatma Gandhi Jayanti",
                "date": "2023-10-02"
            },
            {
                "name": "Second Saturday",
                "date": "2023-10-14"
            },
            {
                "name": "Maha Ashtami",
                "date": "2023-10-22"
            },
            {
                "name": "Vijaya Dasami",
                "date": "2023-10-24"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-10-28"
            },
            {
                "name": "Second Saturday",
                "date": "2023-11-11"
            },
            {
                "name": "Deepavali / Diwali",
                "date": "2023-11-12"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-11-25"
            },
            {
                "name": "Guru Nanak Jayanti",
                "date": "2023-11-27"
            },
            {
                "name": "Second Saturday",
                "date": "2023-12-09"
            },
            {
                "name": "Fourth Saturday",
                "date": "2023-12-23"
            },
            {
                "name": "Christmas",
                "date": "2023-12-25"
            }
         ]
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
