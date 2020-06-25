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
  select "l"."listingId",
    "l"."title",
    "l"."description",
    "l"."price",
    "l"."imageUrl",
    "locations"."name" as "location",
    "users"."username" as "sellerName",
    "users"."imageUrl" as "sellerPicture"
  from "listings" as "l"
  join "locations" using ("locationId")
  inner join "users" on "l"."listingId" = "users"."userId"
  where "listingId" = $1;`;
  const values = [listingId];
  db.query(sql, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
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
