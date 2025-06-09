// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("taskbar").style.top = "0";
//   } else {
//     document.getElementById("taskbar").style.top = "-50px";
//   }
// }


// function onClick()
// {
//   document.getElementById("contactus");
//   alert("Our number: +919867453215");
// }

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://amritanshubhardwaj12crosary:yr474rucqk@cluster0.etgxyfj.mongodb.net/";

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Successfully connected to Atlas");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);


// // Create a Mongoose schema for your form data
// const FormDataSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   number: String,
//   city: String,
//   state: String,
//   pincode: String,
//   queries: String
// });

// const FormData = mongoose.model('FormData', FormDataSchema);

// const app = express();

// // Body parser middleware to parse incoming request bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// // Route to handle form submission
// app.post('/submit-form', (req, res) => {
//   // Create a new FormData instance with the submitted data
//   const newFormData = new FormData({
//     firstName: req.body.FirstName,
//     lastName: req.body.LastName,
//     email: req.body.email,
//     number: req.body.number,
//     city: req.body.city,
//     state: req.body.state,
//     pincode: req.body.pincode,
//     queries: req.body.queries
//   });

//   // Save the FormData instance to the database
//   newFormData.save()
//     .then(() => res.send('Form data saved successfully'))
//     .catch(err => res.status(400).send('Error saving form data: ' + err));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { MongoClient } = require("mongodb");

const app = express();

// Body parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
const url = "mongodb+srv://amritanshubhardwaj12crosary:yr474rucqk@cluster0.etgxyfj.mongodb.net/";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB Atlas");
    } catch (err) {
        console.log(err.stack);
    }
}

run().catch(console.dir);

// Create a MongoDB database and collection for your form data
const db = client.db("mydb");
const collection = db.collection("formdata");

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    // Create a new document with the submitted data
    const newFormData = {
        firstName: req.body.FirstName,
        lastName: req.body.LastName,
        email: req.body.email,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        queries: req.body.queries
    };

    console.log("RUNNING")

    // Insert the document into the collection
    collection.insertOne(newFormData)
        .then(() => res.send('Form data saved successfully'))
        .catch(err => res.status(400).send('Error saving form data: ' + err));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
