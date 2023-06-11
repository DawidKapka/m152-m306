
import {orderRouter} from "./router/orderRouter";
import bodyParser from "body-parser";
import {menuRouter} from "./router/menuRouter";
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors("http://localhost:4200"))

app.use(bodyParser.json());

app.use('/order', orderRouter);

app.use('/menu', menuRouter)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
