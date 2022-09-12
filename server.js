const express = require('express');
const path = require('path');
const db = require('./db/db.json')
const fs = require('fs')

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    return res.status(200).json(db)
});

app.post('/api/notes', async (req, res) => {
    let response = null
    console.log(req)

    fs.readFile("./db/db.json", 'utf8', function (err, data) {
        response = data
    })
    // console.log(response)
});

// app.post('/api/reviews', (req, res) => {

//     // const { product, review, username } = req.body;
//     console.log(req)

//     // If all the required properties are present
//     if (product && review && username) {
//         // Variable for the object we will save
//         const newReview = {
//             product,
//             review,
//             username,
//             review_id: uuid(),
//         };

//         // Obtain existing reviews
//         fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 // Convert string into JSON object
//                 const parsedReviews = JSON.parse(data);

//                 // Add a new review
//                 parsedReviews.push(newReview);

//                 // Write updated reviews back to the file
//                 fs.writeFile(
//                     './db/reviews.json',
//                     JSON.stringify(parsedReviews, null, 4),
//                     (writeErr) =>
//                         writeErr
//                             ? console.error(writeErr)
//                             : console.info('Successfully updated reviews!')
//                 );
//             }
//         });

//         const response = {
//             status: 'success',
//             body: newReview,
//         };

//         console.log(response);
//         res.status(201).json(response);
//     } else {
//         res.status(500).json('Error in posting review');
//     }
// });
















app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
