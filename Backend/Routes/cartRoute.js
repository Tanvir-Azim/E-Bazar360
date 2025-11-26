import express from 'express'
import { addToCard } from "../Controllers/cartController.js"
import { getUserCart } from '../Controllers/cartController.js'


const cartRouter = express.Router()

cartRouter.post('/add',addToCard)

//get user card
cartRouter.get('/user',getUserCart)
export default cartRouter