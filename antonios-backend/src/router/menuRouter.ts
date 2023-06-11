import {getBestsellers, getMenu} from "../controller/menuController";

const express = require('express');

const menuRouter = express.Router();

menuRouter.get('/', getMenu)
menuRouter.get('/bestsellers', getBestsellers)

export { menuRouter}
