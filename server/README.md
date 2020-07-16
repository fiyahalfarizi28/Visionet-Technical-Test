# mongoose-crud
HowTo
requirement:
- Node.js v.10 or later
- All package installed
1. open your console (cmd/terminal), then install the package by typing `npm install` inside of directory server, all requried package already written inside package.json
2. type `node app.js` to run the application, by default I set it on port number 3000 in localhost address (localhost:3000)
3. DB that connected to this application are deployed in mongodb atlas (cloud mongo), for detailed information about connection to DB you can see it in .env_example.txt file.

### All endpoint

| method | routes                        | detail                              | body | headers |
| ------ | ----------------------------- | ------------------------------------|--------|-------------|
| GET    | /formhistory/:email                | show one `formHistory`, searched by email address              | - | - |
| POST   | /formhistory                    | create new `formHistory`                   | customerName, cluster, address, nobuVA, paymentAmount, dueDate, flagEktp, flagEktpCouple, flagNpwp, flagKk, flagAktaNikah, flagBuktiPenghasilan, flagSuratPersetujuanPasangan, salesName, contactPerson, email | - |
| DELETE   | /formhistory/:email              | delete one of `transactions` list by id          | - | - |
| PATCH    | /formhistory/:email                | update `formHistory`, changed value depends on what will be send from request body                  | customerName, cluster, address, nobuVA, paymentAmount, dueDate, flagEktp, flagEktpCouple, flagNpwp, flagKk, flagAktaNikah, flagBuktiPenghasilan, flagSuratPersetujuanPasangan, salesName, contactPerson, email | - |
------


## Example endpoint
### FormHistory

> GET / formhistory / {email}
#### expected output
HTTP Status Code: `200`
    {
        "address": [
            "Rasuna Said",
            "56"
        ],
        "_id": "5f0ea1566fdd43314c7b04d0",
        "customerName": "Elvia Nur Anggraini",
        "cluster": "Visionet Cyber Park",
        "nobuVA": "1234567890",
        "paymentAmount": "150000",
        "dueDate": "20-07-2020",
        "flagEktp": true,
        "flagEktpCouple": true,
        "flagNpwp": true,
        "flagKk": true,
        "flagAktaNikah": true,
        "flagBuktiPenghasilan": true,
        "flagSuratPersetujuanPasangan": true,
        "salesName": "Nama Sales Tes",
        "contactPerson": "08986167288",
        "email": "fiyahnanggraini@gmail.com",
        "createdAt": "2020-07-15T06:25:26.831Z",
        "updatedAt": "2020-07-15T06:25:26.831Z"
    }