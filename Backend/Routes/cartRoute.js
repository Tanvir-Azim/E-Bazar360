import express from 'express'
import { addToCard } from "../Controllers/cartController.js"
import { getUserCart } from '../Controllers/cartController.js'
import { removeProductFromCart } from '../Controllers/cartController.js'
import { cleareCart } from '../Controllers/cartController.js'


const cartRouter = express.Router()

cartRouter.post('/add',addToCard)

//get user card
cartRouter.get('/user',getUserCart)
cartRouter.delete('/remove/:productId',removeProductFromCart)
cartRouter.delete('/cleare',cleareCart)
export default cartRouter