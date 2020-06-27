require('dotenv/config');
const express = require('express');
const path = require('path');
const filePath = path.join(__dirname, '/public', 'images', 'uploads');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({
  storage: storage
});

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
    "l"."sellerId",
    "l"."title",
    "l"."description",
    "l"."price",
    "l"."imageUrl",
    "locations"."name" as "location",
    "users"."username" as "sellerName",
    "users"."imageUrl" as "sellerPicture"
  from "listings" as "l"
  join "locations" using ("locationId")
  inner join "users" on "l"."sellerId" = "users"."userId"
  where "listingId" = $1;`;
  const values = [listingId];
  db.query(sql, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.delete('/api/listings/:listingId', (req, res, next) => {
  const listingId = parseInt(req.params.listingId);
  const sql = `
  delete from "listings"
  where "listingId" = $1
  returning *`;
  const values = [listingId];
  db.query(sql, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/sellerListing/:sellerId', (req, res, next) => {
  const userId = parseInt(req.params.sellerId);
  const sql = `
  select "l"."sellerId",
  "l"."title",
  "l"."description",
  "l"."imageUrl",
  "l"."listingId",
  "l"."price"
  from "listings" as "l"
  where "sellerId" = $1;`;
  const values = [userId];
  db.query(sql, values)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/listings', upload.single('image'), (req, res, next) => {
  const imageUrl = '/uploads/' + req.file.filename;
  const sellerId = parseInt(req.body.sellerId);
  const locationId = parseInt(req.body.locationId);
  const price = parseInt(req.body.price);

  if (!req.body.sellerId || !req.body.locationId || !req.body.title || !req.body.description || !req.body.price || !req.file) {
    throw next(new ClientError('missing listings field(s)', 400));
  }

  if (isNaN(price) || price <= 0) {
    throw next(new ClientError('price must be a positive integer', 400));
  }

  const sql = `
  insert into "listings"("sellerId", "locationId", "title", "description", "price", "imageUrl")
    values($1, $2, $3, $4, $5, $6)
    returning * ;
  `;

  const values = [sellerId, locationId, req.body.title, req.body.description, price, imageUrl];

  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));

});

app.post('/api/purchases', (req, res, next) => {
  const userId = parseInt(req.body.userId);
  const listingId = parseInt(req.body.listingId);
  const sql = `
  with "double_or_nothing" as (
    insert into "purchases" ("customerId", "listingId")
    values ($1, $2)
    returning *
  )
  insert into "chats" ("customerId", "listingId")
  select "customerId",
    "listingId"
  from "double_or_nothing"
  returning *`;
  const values = [userId, listingId];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

// Add a Listing to Favorites
app.post('/api/favorites', (req, res, next) => {

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
