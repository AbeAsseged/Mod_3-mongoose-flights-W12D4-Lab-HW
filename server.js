require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const flights = require('./models/flights');
const mongoose = require('mongoose');

//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
//////////////////////////

const jsxViewEngine = require('jsx-view-engine');
const Flight = require('./models/flight');



app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware;
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));



// Index
app.get('/flights', async (req, res) => {
  try {
    const foundFlights = await Flight.find({});
    console.log(foundFlights);
    res.status(200).render('flights/Index', {
      fruits: foundFlights,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
app.get('/flights/new', (req, res) => {
  console.log('New controller');
  res.render('flights/New');
});

// Update 
app.put('/flights/:id', async (req, res) => {
  try {
    const destination = req.body
    const foundFlight = await Flight.findById(
      // id is from the url that we got by clicking on the edit <a/> tag
      req.params.id, 
      // the information from the form, with the update that we made above
      req.body, 
      // need this to prevent a delay in the update
      )
      console.log(updatedFlight);
    
    const updatedFlightData = foundFlight.destination.push(destination)

    // {
    //   $push: { destination: req.body },
    // },
    
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, foundFlight, {new: true} )
    
    res.status(201).send(updatedFlight);
  } catch (err) {
    res.status(400).send(err);
  }
});


// Create
app.post('/flights', async (req, res) => {
  try {

    const createdFlight = await Flight.create(req.body);

    res.status(201).redirect('/flights');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
app.get('/flights/:id', async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);

    //second param of the render method must be an object
    res.render('flights/Show', {
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      flight: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});















// Part 1 

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const flights = require('./models/flights');

// const jsxViewEngine = require('jsx-view-engine');

// app.set('view engine', 'jsx');
// app.set('views', './views');
// app.engine('jsx', jsxViewEngine());

// // Middleware;
// app.use((req, res, next) => {
//   console.log('Middleware: I run for all routes, 1');
//   next();
// });
// // By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
// app.use(express.urlencoded({ extended: false }));



// // Index
// app.get('/flights', (req, res) => {
//   console.log('Index controller');
//   res.render('flights/Index', { flights });
// });

// // New
// app.get('/flights/new', (req, res) => {
//   console.log('New controller');
//   res.render('flights/New');
// });



// // Create
// app.post('/flights', (req, res) => {
 
// fruits.push(req.body);
// console.log(flights);
//   // res.send('data received');
//   res.redirect('/flights') // send the user back to /flights
// });




// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
