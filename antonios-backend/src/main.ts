
import {orderRouter} from "./router/orderRouter";
import bodyParser from "body-parser";
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors("http://localhost:4200"))

app.use(bodyParser.json());

app.use('/order', orderRouter);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
