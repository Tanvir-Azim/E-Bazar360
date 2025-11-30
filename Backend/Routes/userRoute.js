import express from "express";
//import register from '../Controllers/userControllers.js'
//import { register } from 'module'
import { register, login, allUser } from "../Controllers/userControllers.js";
import { decriseProductQty } from "../Controllers/cartController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get('/alluser',allUser)
router.post('/qty',decriseProductQty)

export default router;
