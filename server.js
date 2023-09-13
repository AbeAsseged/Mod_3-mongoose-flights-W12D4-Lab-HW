const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const flights = require('./models/flights');

const jsxViewEngine = require('jsx-view-engine');

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
app.get('/flights', (req, res) => {
  console.log('Index controller');
  res.render('flights/Index', { flights });
});

// New
app.get('/flights/new', (req, res) => {
  console.log('New controller');
  res.render('flights/New');
});



// Create
app.post('/flights', (req, res) => {
 
fruits.push(req.body);
console.log(flights);
  // res.send('data received');
  res.redirect('/flights') // send the user back to /flights
});




app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
