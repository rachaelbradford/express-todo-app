import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

// setup express app
const app = express();
const PORT = 5000;

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(router);

app.listen(PORT, () => {
  console.log('server running on port ${PORT}')
});
