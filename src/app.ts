import express, { json } from 'express';
import addressRouter from './router/address';
import orderRouter from './router/order';

import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import cors from 'cors';
import momo from './momo/index';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.use('/address', addressRouter);
app.use('/order', orderRouter);

app.use('/init-payment', momo.initPaymentRoute);
app.use('/ipn-payment', momo.ipnPaymentRoute);

app.use((err, req, res, next) => {
  res.json({ message: 'Whops! Somthing Wrong :)' });
  res.end();
});

app.listen(port, () => {
  console.log(`Run At: http://localhost:${port}`);
});