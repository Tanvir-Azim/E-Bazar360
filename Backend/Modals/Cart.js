import mongoose from "mongoose";


const cartItemSchem = new mongoose.Schema({
        productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    qty:{type:Number,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    imageurl:{ type: String, required: true },

})
 const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    item:[cartItemSchem]
})

const Cart = mongoose.model('Cart',cartSchema)

export default Cart