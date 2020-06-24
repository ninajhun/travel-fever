require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/users', (req, res, next) => {
  const sql = `
  select *
  from "users";`;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/users/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const sql = `
  select *
  from "users"
  where "userId" = $1;`;
  const values = [userId];
  db.query(sql, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/locations', (req, res, next) => {
  const sql = `
  select *
  from "locations";`;
  db.query(sql)
    .then(results => res.json(results.rows))
    .catch(err => next(err));
});

// Might have to change this down the line for when the search-city bar gets
// added to the popular page and view all listings page
app.get('/api/locations/:locationId', (req, res, next) => {
  const locationId = parseInt(req.params.locationId);
  const sql = `
  select *
  from "locations"
  where "locationId" = $1;`;
  const values = [locationId];
  db.query(sql, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/listings', (req, res, next) => {
  const sql = `
  select *
  from "listings";
  `;
  db.query(sql)
    .then(results => res.json(results.rows))
    .catch(err => next(err));
});

app.get('/api/listings/:listingId', (req, res, next) => {
  const listingId = parseInt(req.params.listingId);
  const sql = `
  select *
  from "listings"
  where "listingId" = $1;`;
  const values = [listingId];
  db.query(sql, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post('/api/listings', (req, res, next) => {

  if (isNaN(req.body.sellerId) || req.body.sellerId <= 0) {
    throw next(new ClientError('sellerId must be a positive integer', 400));

    // return res.status(400).json({
    //   error: 'sellerId must be a positive integer'
    // });
  }

  if (isNaN(req.body.locationId) || req.body.locationId <= 0) {
    throw next(new ClientError('locationId must be a positive integer', 400));
  }

  const sql = `


  `;

  const values = [req.body.sellerId, req.body.locationId, req.title, req.body.description, req.body.price, req.imageUrl];
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
